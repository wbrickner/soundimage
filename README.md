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
Usage: index [options] ./audio.wav

Options:
  -v, --version          output the version number
  -r, --resolution [n]   Set vertical resolution (must be a power of two). This necessarily decreases horizontal resolution proportionately
  -o, --output [path]    Filename of the output (random otherwise)
  -f, --format [format]  Output format (can be "png", "gif", "tif", "bmp", or "jpg")
  -d, --debug            Log detailed errors
  -h, --help             output usage information
```

# Example output

(output goes here!)