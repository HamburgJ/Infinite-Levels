import json
import time
from ai_model import AIModel

INITIAL_ITEMS = ["🔑", "🔢", "∞", "🧠", "👤"]
SAVE_FILE = 'game_data_checkpoint.json'

def load_checkpoint():
    try:
        with open(SAVE_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            print(f"Loaded checkpoint with {len(data['states'])} states")
            return data['states'], data['descriptions'], data['queue']
    except FileNotFoundError:
        print("No checkpoint found, starting fresh")
        return {
            '': {item: item for item in INITIAL_ITEMS}
        }, {}, [(item, item) for item in INITIAL_ITEMS]
    

def save_checkpoint(game_states, state_descriptions, states_to_process):
    data = {
        'states': game_states,
        'descriptions': state_descriptions,
        'queue': states_to_process
    }
    with open(SAVE_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"\nCheckpoint saved with {len(game_states)} states")
def get_next_state_prompt(current_state, item, known_results):
    # Map initial items to their descriptions
    initial_descriptions = {
        "🔑": "key",
        "🔢": "numbers", 
        "∞": "infinity",
        "🧠": "knowledge",
        "👤": "mankind/human"
    }

    base_prompt = get_base_prompt()
    
    if not current_state:
        item_desc = initial_descriptions.get(item, item)
        return f"""{base_prompt}

Now, given an empty starting state and the item {item} ({item_desc}), what would be an appropriate representation?
Just return the emoji and its basic meaning in parentheses."""
    
    state_desc = known_results.get(current_state, current_state)
    item_desc = initial_descriptions.get(item, item)
    return f"""{base_prompt}

Current State: {current_state} ({state_desc})
Used Item: {item} ({item_desc})
What would be an appropriate 3-emoji combination that represents the result of combining these?
Return only the emoji combination and a brief description in parentheses. Try to be specific but insightful."""

def get_base_prompt():
    return """You are helping design an emoji combination game. Players can combine different emoji items to create new items with special meanings.

Rules:
1. Focus on the result be a logical combination of the inputs. This is the most important part.
2. The result should be a specific noun, or concept.
3. Each combination should result in 3 emojis that represent a concept
4. The meaning should be described in parentheses
5. Lean into sci-fi, numbers, mathematics, psychology, and philosophy concepts

Example:
Input State: Empty
Used Item: 🔑 (Key)
Result: 🔑 (Key on its own)

Input State: 🔑 (Key)
Used Item: 🔢 (Numbers)
Result: 📜💻🔣 (Encryption - represented by Code + Computer + Symbol)

Input State: 🧠 (Brain)
Used Item: 🔑 (Key)
Result: 🧑‍🏫🔑💭 (Psychology - represented by scientist + key + thought bubble)
"""

def parse_ai_response(response, current_state=None):
    try:
        text = response.text
        # Extract emojis and description
        parts = text.split('(')
        if len(parts) != 2:
            return None, None
        
        emojis = parts[0].strip()
        description = parts[1].strip().rstrip(')')
        
        # Validate emoji count for combinations
        if current_state and len(emojis.strip()) != 3:
            return None, None
            
        return emojis, description
    except Exception as e:
        print(f"Error parsing response: {e}")
        return None, None

def traverse_game_tree():
    ai = AIModel(temperature=0.7, model_name='gemini-1.5-flash-latest')
    game_states, state_descriptions, states_to_process = load_checkpoint()
    
    total_combinations = 0
    successful_combinations = 0
    
    try:
        while states_to_process:
            current_state, desc = states_to_process.pop(0)
            if current_state not in game_states:
                game_states[current_state] = {}
                state_descriptions[current_state] = desc
                
            print(f"\nProcessing combinations for state: {current_state} ({desc})")
            
            # Add validation to prevent self-combination
            for item in INITIAL_ITEMS:
                if item in game_states[current_state] or item == current_state:  # Added check here
                    continue
                    
                total_combinations += 1
                prompt = get_next_state_prompt(current_state, item, state_descriptions)
                
                
                max_retries = 3
                retry_count = 0
                
                while retry_count < max_retries:
                    try:
                        print(f"Attempting: {current_state} + {item}")
                        response = ai.generate_content(prompt)
                        new_state, description = parse_ai_response(response, current_state)
                        
                        if new_state and description:
                            game_states[current_state][item] = new_state
                            if new_state not in game_states:
                                states_to_process.append((new_state, description))
                                state_descriptions[new_state] = description  # Save description for new combination
                            successful_combinations += 1
                            print(f"Success! Created: {new_state} ({description})")
                            # Save after each successful combination
                            save_checkpoint(game_states, state_descriptions, states_to_process)
                            break
                        
                    except Exception as e:
                        if "429" in str(e):
                            retry_count += 1
                            wait_time = 2 ** retry_count  # Exponential backoff
                            print(f"Rate limit reached. Waiting {wait_time} seconds...")
                            time.sleep(wait_time)
                        else:
                            print(f"Error processing {current_state} + {item}: {e}")
                            break

            print(f"\nProgress: {successful_combinations}/{total_combinations} combinations processed")
            
    except KeyboardInterrupt:
        print("\nProcess interrupted by user. Saving progress...")
        save_checkpoint(game_states, state_descriptions, states_to_process)
        return game_states, state_descriptions
        
    return game_states, state_descriptions

def save_game_data(game_states, state_descriptions, filename='game_data.json'):
    data = {
        'states': game_states,
        'descriptions': state_descriptions
    }
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"\nFinal game data saved to {filename}")

if __name__ == "__main__":
    game_states, state_descriptions = traverse_game_tree()
    save_game_data(game_states, state_descriptions)