import cohere
import openai
from openai import OpenAI
import os
import requests

co = cohere.Client('lOF6qWQJ0aYLxWrQwQYYHbUiHIrBWpQXwyVghS1c')
openai.api_key = "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"
client = OpenAI(api_key="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")



def generate_story(transcript):
    message = ("Pretend you are a script writer for a kids TV show, you are tasked with creating a short cartoon story that aims to teach kids about complex concepts. Given these notes create a short story under 200 words! " + transcript)

    response = co.chat(
        message, 
        model="command", 
        temperature=0.9
    )

    answer = response.text
    return answer

def generate_flashcards(transcript):
    message = ("Pretend you are trying to create flashcards to help you remember new concepts for a class, make sure to format each question and answer so that it is organized. Make sure to leave just question and answer, don't add any additional text. Here are the notes for the topic" + transcript)

    response = co.chat(
        message,
        model = "command",
        temperature=0.9

    )
    answer = response.text
    return answer

#GPT Image Generation
def generate_pannels(story):     
    response = client.images.generate(
    model="dall-e-3",
    prompt=("Pretend you are a comic book artist who has been given a story to illustrate. Make sure to organize the images into pannels like a comic book. It is crucial that you focus on illustrating the images and that there is no text inside the pictures. Here is the story make sure that the pannels follow closely to the story: " + story) ,
    size="1024x1024",
    quality="standard",
    n=1,
    )

    image_url = response.data[0].url
    # Fetch and save the image
    image_response = requests.get(image_url)
    if image_response.status_code == 200:
        with open('./temp/images/panel.png', 'wb') as file:
            file.write(image_response.content)
    
    return image_url

f = open('./temp/transcript.txt', 'r')
transcript = f.read()
f.close()

storyboard = generate_story(transcript)
image_url = generate_pannels(storyboard)
flashcards = generate_flashcards(transcript)

#Uploading output to a txt file
f = open('./temp/storyboard.txt','w')
f.write(storyboard)
f.close()

s = open('./temp/flashcards.txt','w')
s.write(flashcards)
s.close()



