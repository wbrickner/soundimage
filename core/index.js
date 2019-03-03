const fs = require("fs-extra")
,     WAVDecoder = require("wav-decoder")
,     FFT = require("fft.js")
,     nanoid = require("nanoid")
,     imageEncoder = require("image-encode")

function padToFactorOfWindowSize(audio, windowSize) {
    const windowCount = Math.ceil(audio.channelData[0].length / windowSize)
    ,     finalLength = windowSize * windowCount

    for (var j = audio.channelData[0].length; j < finalLength; ++j) {
        audio.channelData[0][j] = 0
    }

    return windowCount
}

async function loadAndDecodeWAV(absoluteWAVPath) {
    let buffer = await fs.readFile(absoluteWAVPath)
    ,   audio = await WAVDecoder.decode(buffer)

    return audio
}

async function writeImage(fileName, image, format, width, height) {
    return (
        fs.writeFile(fileName, Buffer.from( imageEncoder(image, format, { width, height }) ))
          .then(() => fileName)
    )
}

module.exports = async function SoundImage(absoluteInputPath, options = {}) {
    let audio = await loadAndDecodeWAV(absoluteInputPath)

    const kWindowSize = options.sliceSize || 256
    ,     imageHeight = 2 * kWindowSize
    ,     windowCount = padToFactorOfWindowSize(audio, kWindowSize)
    ,     sampleCount = windowCount * kWindowSize

    const transform = new FFT(kWindowSize)
    ,     out = transform.createComplexArray()

    // 4 channels, at 8 bit color depth.s
    const image = new Uint8ClampedArray(4 * imageHeight * windowCount)

    let x = 0

    for (var offset = 0; offset < sampleCount; offset += kWindowSize) {
        // prepare input and perform transform
        // TODO: don't re-create array, use the same array and overwrite contents
        const realInput = audio.channelData[0].slice(offset, offset + kWindowSize)
        transform.realTransform(out, realInput)

        // write into the image
        for (var y = 0; y < imageHeight; ++y) {
            image[4 * (x + (y * windowCount)) + 0] = 
            image[4 * (x + (y * windowCount)) + 1] = 
            image[4 * (x + (y * windowCount)) + 2] = 255 * out[imageHeight - y]
            image[4 * (x + (y * windowCount)) + 3] = 255
        }
        
        ++x
    }

    return writeImage(options.outputPath || `${nanoid(12)}.png`, image, options.format || "png", windowCount, imageHeight)
}