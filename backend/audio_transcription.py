import cohere
from google.cloud import speech
import openai
co = cohere.Client('lOF6qWQJ0aYLxWrQwQYYHbUiHIrBWpQXwyVghS1c')

#Cohere Storyboard Generation
message = "Pretend you are a script writer for a kids TV show, you are tasked with creating a short cartoon story that aims to teach kids about complex concepts. Given these notes create a short story! "

response = co.chat(
	message, 
	model="command", 
	temperature=0.9
)

answer = response.text
print(answer)

#GPT Image Generation

openai.api_key = "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"
