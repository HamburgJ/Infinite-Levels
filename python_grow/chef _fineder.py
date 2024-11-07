import json
import time
from ai_model import AIModel

INITIAL_ITEMS = ["🍎", "🥬", "🍞", "🥩", "🥤", "🍪", "🧂"]  # Added salt as the 7th item
SAVE_FILE = 'game_data_checkpoint_chef.json'

def load_checkpoint():
    try:
        with open(SAVE_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            print(f"Loaded checkpoint with {len(data['states'])} states")
            
            # Convert lists back to sets in queue
            queue = []
            for state, desc, used_items in data['queue']:
                queue.append((state, desc, set(used_items)))
                
            return (data['states'], data['descriptions'], 
                   queue, data.get('failed', []))
    except FileNotFoundError:
        print("No checkpoint found, starting fresh")
        return (
            {'': {}},  # game_states starts empty
            {},        # state_descriptions starts empty
            [('', '', set()) for _ in range(1)],  # queue starts with one empty state
            []         # no failed combinations
        )

def save_checkpoint(game_states, state_descriptions, states_to_process, failed_combinations=[]):
    # Convert sets to lists in states_to_process
    serializable_queue = []
    for state, desc, used_items in states_to_process:
        serializable_queue.append((state, desc, list(used_items)))
    
    # Convert sets to lists in failed_combinations
    serializable_failed = []
    for state, desc, item in failed_combinations:
        serializable_failed.append((state, desc, item))
    
    data = {
        'states': game_states,
        'descriptions': state_descriptions,
        'queue': serializable_queue,
        'failed': serializable_failed
    }
    with open(SAVE_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"\nCheckpoint saved with {len(game_states)} states")

def get_next_state_prompt(current_state, item, known_results):
    # Map initial items to their descriptions
    initial_descriptions = {
        "🍎": "fruit",
        "🥬": "vegetable", 
        "🍞": "bread",
        "🥩": "meat",
        "🥤": "drink",
        "🍪": "dessert",
        "🧂": "seasoning"
    }

    base_prompt = get_base_prompt()
    
    if not current_state:
        item_desc = initial_descriptions.get(item, item)
        return f"""{base_prompt}

Now, given an empty kitchen and the ingredient {item} ({item_desc}), what would be an appropriate dish?
Just return the food emoji and its dish name in parentheses."""
    
    current_emoji = current_state.split('|')[0] if current_state else ''
    state_desc = known_results.get(current_state, current_emoji)
    item_desc = initial_descriptions.get(item, item)
    return f"""{base_prompt}

Current Ingredients: {current_state} ({state_desc})
Added Ingredient: {item} ({item_desc})
What dish could be made by combining these ingredients?
Return only the food emoji and a brief description in parentheses. Be creative but logical with the cooking combinations."""

def get_base_prompt():
    return """You are a creative chef designing food combinations. Players can combine different ingredients to create new dishes.

Rules:
1. The result should be a logical cooking combination of the inputs
2. The result should be a specific dish or food item
3. Each combination should result in a single or multiple food emoji that represents the cooked dish
4. The meaning should describe the dish name in parentheses

Example:
Input: Empty
Used Item: 🍞 (bread)
Response: "🍞 (bread)"

Input: 🍞 (bread)
Used Item: 🥩 (meat)
Response: "🥪 (Sandwich)"

Input: 🥬 (vegetable)
Used Item: 🧂 (seasoning)
Response: "🥗 (salad)"

Input: 🥪 (Sandwich)
Used Item: 🍎 (fruit)
Response: "🍰 (Pie)"

Your response should be in the following format:
<emoji> (description)
e.g.
🍰 (Pie)
🍜 (Pho)
🍣 (Sushi)
"""

def parse_ai_response(response, current_state=None):
    try:
        text = response.text
        parts = text.split('(')
        if len(parts) != 2:
            return None, None
        
        emojis = parts[0].strip()
        description = parts[1].strip().rstrip(')')
        
        # For food combinations, we want a single emoji result
        if current_state and len(emojis.strip()) != 1:
            return None, None
            
        return emojis, description
    except Exception as e:
        print(f"Error parsing response: {e}")
        return None, None
def traverse_game_tree():
    ai = AIModel(temperature=0.7, model_name='gemini-1.5-flash')
    game_states, state_descriptions, states_to_process, failed_combinations = load_checkpoint()

    total_combinations = 0
    successful_combinations = 0
    
    try:
        while states_to_process or failed_combinations:
            if failed_combinations:
                current_state, desc, item = failed_combinations.pop(0)
                used_items = set(current_state.split('|used:')[1].split(',')) if '|used:' in current_state else set()
            else:
                if not states_to_process:
                    # Check for unexplored combinations in existing states
                    for state in game_states:
                        current_used = set(state.split('|used:')[1].split(',')) if '|used:' in state else set()
                        available_items = [i for i in INITIAL_ITEMS if i not in current_used]
                        if available_items and state not in [s[0] for s in states_to_process]:
                            states_to_process.append((state, state_descriptions.get(state, ''), current_used))
                    if not states_to_process:
                        break
                
                current_state, desc, used_items = states_to_process.pop(0)

            # Initialize empty state
            if current_state == '':
                print("Processing initial items...")
                for item in INITIAL_ITEMS:
                    new_state_key = f"{item}|used:{item}"
                    game_states.setdefault('', {})[item] = new_state_key
                    if new_state_key not in game_states:
                        states_to_process.append((new_state_key, item, {item}))
                        state_descriptions[new_state_key] = item
                    successful_combinations += 1
                continue

            # Process non-empty states
            if current_state not in game_states:
                game_states[current_state] = {}
                state_descriptions[current_state] = desc

            # Get available items for this state
            available_items = [i for i in INITIAL_ITEMS if i not in used_items]
            for item in available_items:
                if item in game_states.get(current_state, {}):
                    continue

                total_combinations += 1
                prompt = get_next_state_prompt(current_state, item, state_descriptions)
 
                max_retries = 10
                retry_count = 0
                success = False
                
                while retry_count < max_retries:
                    try:
                        print(f"Attempting: {current_state} + {item}")
                        response = ai.generate_content(prompt)
                        new_state, description = parse_ai_response(response, current_state)
                        
                        if new_state and description:
                            # Update the state key to include used items
                            new_used_items = used_items | {item}
                            new_state_key = f"{new_state}|used:{','.join(sorted(new_used_items))}"
                            
                            game_states[current_state][item] = new_state_key
                            if new_state_key not in game_states:
                                states_to_process.append((new_state_key, description, new_used_items))
                                state_descriptions[new_state_key] = description
                            successful_combinations += 1
                            print(f"Success! Created: {new_state_key} ({description})")
                            success = True
                            save_checkpoint(game_states, state_descriptions, states_to_process)
                            break
                        
                        retry_count += 1
                        
                    except Exception as e:
                        if "429" in str(e):
                            retry_count += 1
                            wait_time = 2 ** retry_count
                            print(f"Rate limit reached. Waiting {wait_time} seconds...")
                            time.sleep(wait_time)
                        else:
                            print(f"Error processing {current_state} + {item}: {e}")
                            retry_count += 1
                
                if not success:
                    print(f"Failed to process {current_state} + {item} after {max_retries} attempts")
                    failed_combinations.append((current_state, desc, item))

        # Final save and cleanup
        save_checkpoint(game_states, state_descriptions, states_to_process, failed_combinations)
        
        # Convert checkpoint format to final game data format
        final_states = {}
        final_descriptions = {}
        
        for state, transitions in game_states.items():
            base_state = state.split('|')[0] if '|' in state else state
            final_states[base_state] = {
                item: transitions[item].split('|')[0] for item in transitions
            }
            if state in state_descriptions:
                final_descriptions[base_state] = state_descriptions[state]
        
        return final_states, final_descriptions
        
    except KeyboardInterrupt:
        print("\nProcess interrupted by user. Saving progress...")
        save_checkpoint(game_states, state_descriptions, states_to_process, failed_combinations)
        return None, None

def verify_complete_transitions(game_states):
    incomplete_states = {}
    for state in game_states:
        missing_items = [item for item in INITIAL_ITEMS 
                        if item != state and item not in game_states[state]]
        if missing_items:
            incomplete_states[state] = missing_items
    return incomplete_states

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