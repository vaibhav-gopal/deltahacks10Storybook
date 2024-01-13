import cohere
from google.cloud import speech
co = cohere.Client('Your API key')

def speech_to_text(
    config: speech.RecognitionConfig,
    audio: speech.RecognitionAudio,
) -> speech.RecognizeResponse:
    client = speech.SpeechClient()

    # Synchronous speech recognition request
    response = client.recognize(config=config, audio=audio)

    return response


def print_response(response: speech.RecognizeResponse):
    for result in response.results:
        print_result(result)


def print_result(result: speech.SpeechRecognitionResult):
    best_alternative = result.alternatives[0]
    print("-" * 80)
    print(f"language_code: {result.language_code}")
    print(f"transcript:    {best_alternative.transcript}")
    print(f"confidence:    {best_alternative.confidence:.0%}")

config = speech.RecognitionConfig(
    language_code="en",
)
audio = speech.RecognitionAudio(
    uri="gs://cloud-samples-data/speech/brooklyn_bridge.flac",
)

response = speech_to_text(config, audio)
print_response(response)


