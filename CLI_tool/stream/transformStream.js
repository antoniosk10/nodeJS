const transformString = require("../utils/transformString");
const {Transform} = require("stream");
const getValueByFlag = require("../utils/getValueByFlag");

class TransformStringStream extends Transform {
    _transform(chunk, encoding, callback) {
        try {
            const chunkString = chunk.toString("utf8");
            const transformSteps = getValueByFlag("config").split("-");
            const result = transformSteps.reduce(
                (tempString, step) => transformString(tempString, step),
                chunkString,
            );

            callback(null, result);
        } catch (err) {
            callback(err);
        }
    }
}

module.exports = TransformStringStream;
