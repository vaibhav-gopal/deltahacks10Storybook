# Python backend

1. Create conda environment
> `conda create -n delta python=3.11`
2. Activate conda environemnt
> `conda activate delta`
3. Install cohere, whisper-jax
> `python -m pip install cohere`
> `python -m pip install git+https://github.com/sanchit-gandhi/whisper-jax.git`

4. upgrade whisper-jax:
> `python -m pip install --upgrade --no-deps --force-reinstall git+https://github.com/sanchit-gandhi/whisper-jax.git`

Also requires CLI tool ffmpeg... download using brew, apt or choco