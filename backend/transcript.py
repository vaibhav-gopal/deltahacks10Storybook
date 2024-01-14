from whisper_jax import FlaxWhisperPipline

# instantiate pipeline
pipeline = FlaxWhisperPipline("openai/whisper-medium", dtype=jnp.bfloat16, batch_size=16)

# JIT compile the forward call - slow, but we only do once
text = pipeline("audio.mp3")

# used cached function thereafter - super fast!!
text = pipeline("audio.mp3")