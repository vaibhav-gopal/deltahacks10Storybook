import cohere
from google.cloud import speech
import openai
from openai import OpenAI
co = cohere.Client('lOF6qWQJ0aYLxWrQwQYYHbUiHIrBWpQXwyVghS1c')

def generate_story():
    message = "Pretend you are a script writer for a kids TV show, you are tasked with creating a short cartoon story that aims to teach kids about complex concepts. Given these notes create a short story! "

    response = co.chat(
        message, 
        model="command", 
        temperature=0.9
    )

    answer = response.text

#GPT Image Generation
def generate_pannels():     
    openai.api_key = "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"


    client = OpenAI()

    response = client.images.generate(
    model="dall-e-3",
    prompt=("Here is a script for a comic story, generate only images that represent each pannel ",answer) ,
    size="1024x1024",
    quality="standard",
    n=1,
    )

    image_url = response.data[0].url