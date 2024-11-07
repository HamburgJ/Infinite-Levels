import os
from typing import Dict, Any
import google.generativeai as genai
from dotenv import load_dotenv


class AIModel:
    def __init__(self, model_name: str = 'gemini-1.5-flash', temperature: float = 0.8):
        load_dotenv()
        self.api_key = os.getenv('GEMINI_API_KEY')
        if not self.api_key:
            raise ValueError("GEMINI_API_KEY not found in environment variables")
            
        genai.configure(api_key=self.api_key)
        
        self.generation_config = {
            "temperature": temperature,
            "top_p": 0.9,
            "top_k": 40,
            "candidate_count": 1,
            "max_output_tokens": 100
            }
        
        self.safety_settings = [
            {
                "category": "HARM_CATEGORY_HARASSMENT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                "category": "HARM_CATEGORY_HATE_SPEECH",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
                "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                "threshold": "BLOCK_MEDIUM_AND_ABOVE"
            }
        ]
        
        self.model = genai.GenerativeModel(
            model_name=model_name,
            generation_config=self.generation_config,
            safety_settings=self.safety_settings
        )
    

    def generate_content(self, prompt: str, response_format: str = None) -> Any:
        
        if response_format == 'json':
            # Set specific configuration for JSON responses
            temp_config = self.generation_config.copy()
            temp_config.update({
                "temperature": 0.1,  # Lower temperature for more deterministic JSON
                "candidate_count": 1,
                "stop_sequences": ["}"]  # Stop after JSON closing
            })
            
            self.model = genai.GenerativeModel(
                model_name=self.model.model_name,
                generation_config=temp_config,
                safety_settings=self.safety_settings
            )
        
        return self.model.generate_content(prompt)
    
    def update_config(self, **kwargs: Dict[str, Any]) -> None:
        """Update the model's generation configuration.
        
        Args:
            **kwargs: Key-value pairs of configuration options to update
        """
        self.generation_config.update(kwargs)
        self.model = genai.GenerativeModel(
            model_name=self.model.model_name,
            generation_config=self.generation_config,
            safety_settings=self.safety_settings
        ) 