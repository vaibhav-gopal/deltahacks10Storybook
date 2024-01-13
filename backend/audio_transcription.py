import cohere
from google.cloud import speech
import openai
from openai import OpenAI
co = cohere.Client('lOF6qWQJ0aYLxWrQwQYYHbUiHIrBWpQXwyVghS1c')
openai.api_key = "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"

def generate_story(transcript):
    message = ("Pretend you are a script writer for a kids TV show, you are tasked with creating a short cartoon story that aims to teach kids about complex concepts. Given these notes create a short story! " + transcript)

    response = co.chat(
        message, 
        model="command", 
        temperature=0.9
    )

    answer = response.text
    return answer

#GPT Image Generation
def generate_pannels(story):     
    client = OpenAI()

    response = client.images.generate(
    model="dall-e-3",
    prompt=("Here is a script for a comic story, generate only images that represent each pannel " + story) ,
    size="1024x1024",
    quality="standard",
    n=1,
    )

    image_url = response.data[0].url


output = generate_story("The Laplace transform is one of many so-called integral transforms in applied mathematics.")
#Uploading output to a txt file
f = open('storyboard.txt','w')
f.write(output)
f.close()



