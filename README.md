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

![Example Output Image](https://github.com/wbrickner/SoundImage/blob/master/example-output/output.jpg?raw=true)

# License

Copyright 2019 Will Brickner.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.