from transformers import pipeline
from PIL import Image    
import requests
from transformers import AutoProcessor


model_id = "llava-hf/llava-onevision-qwen2-0.5b-ov-hf"
processor = AutoProcessor.from_pretrained(model_id)
pipe = pipeline("image-to-text", model=model_id)
url = "https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/transformers/tasks/ai2d-demo.jpg"
image = Image.open(requests.get(url, stream=True).raw)

# Define a chat history and use `apply_chat_template` to get correctly formatted prompt
# Each value in "content" has to be a list of dicts with types ("text", "image") 
conversation = [
    {

      "role": "user",
      "content": [
          {"type": "text", "text": "What does the label 15 represent? (1) lava (2) core (3) tunnel (4) ash cloud"},
          {"type": "image"},
        ],
    },
]
prompt = processor.apply_chat_template(conversation, add_generation_prompt=True)

outputs = pipe(image, prompt=prompt, generate_kwargs={"max_new_tokens": 200})
print(outputs)
{"generated_text": "user\n\nWhat does the label 15 represent? (1) lava (2) core (3) tunnel (4) ash cloud\nassistant\nLava"}