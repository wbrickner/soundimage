#!/usr/bin/env node

const program = require("commander")
,     path = require("path")
,     SoundImage = require("./core")

program.version("1.0.0", "-v, --version")
        .usage("[options] ./audio.wav")
        .option("-r, --resolution [n]", "Set vertical resolution (must be a power of two). This necessarily decreases horizontal resolution proportionately", parseInt)
        .option("-o, --output [path]", "Filename of the output (random otherwise)")
        .option("-f, --format [format]", `Output format (can be "png", "gif", "tif", "bmp", or "jpg")`)
        .option("-d, --debug", "Log detailed errors")
        // .option("-h, --help", "Output usage information")
        .parse(process.argv)

const options = { }

if (program.resolution) { options.sliceSize = program.resolution }
if (program.output) { options.outputPath = program.output }
if (program.format) { options.format = program.format }

let inputPath
if (path.isAbsolute(program.args[0])) { inputPath = program.args[0] }
else { inputPath = path.join(".", program.args[0]) }

console.info("Generating image...")

SoundImage(inputPath, options)
    .then(filename => {
        if (options.output) { return }
        console.log("Output:", filename)
    })
    .catch(err => {
        console.error("Error occurred! Check program usage, or open an issue.")
        if (program.debug) { console.error("Details:", err) }
        program.help()
    })