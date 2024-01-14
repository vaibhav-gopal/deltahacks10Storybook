from whisper_jax import FlaxWhisperPipline
import jax.numpy as jnp

# instantiate pipeline
pipeline = FlaxWhisperPipline("openai/whisper-medium", dtype=jnp.bfloat16, batch_size=16)

# JIT compile the forward call - slow, but we only do once
outputs = pipeline("audio.mp3",  task="transcribe", return_timestamps=True)
text = outputs["text"]  # transcription
chunks = outputs["chunks"]  # transcription + timestamps

print(text)