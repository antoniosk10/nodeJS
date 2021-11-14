const options = require("./options");
const fs = require("fs");
const input = options.input && fs.createReadStream(options.input, "utf-8");
const output =
    options.output &&
    fs.createWriteStream(options.output, {
        flags: "a",
    });
const {pipeline} = require("stream");
const {exit, stdin, stdout} = require("process");
const readStream = options.input ? input : stdin;
const writeStream = options.output ? output : stdout;
const TransformStream = require("./stream/transformStream");
const transformStringStream = new TransformStream();

if (!options.input) {
    stdout.write("Строка для шифрования:\n");
}
setImmediate(() => {
    stdin.on("data", chunk => {
        stdout.write("Строка для шифрования:\n");
    });
});

pipeline(readStream, transformStringStream, writeStream, err => {
    if (err?.errno === -4058) {
        exit(3);
    } else if (err) {
        exit(1);
    } else {
        stdout.write("Готово!");
    }
});
