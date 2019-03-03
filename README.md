# SoundImage

SoundImage creates grayscale visualizations of WAV audio files.

Frequency increases from bottom to top.

Time increases from left to right.

A brighter pixel represents a higher intensity of that frequency at that time.

# Installation

```shell
git clone https://github.com/wbrickner/sound-image
```

This project requires a (recent) version of Node.js.

# Usage

```shell
./index.js -v             # Display version information
           -r <Integer>   # Set vertical resolution (this necessarily decreases horizontal resolution proportionately)
           ./audio.wav    # Audio input
```

# Example output

(output goes here!)