const getValueByFlag = require("./utils/getValueByFlag");
const checkOptions = require("./utils/checkOptions");
const {stderr} = process;
const MAP_OF_ERRORS = require("./constants/errors");

process.on("exit", code => {
    if (code !== 0) {
        stderr.write(MAP_OF_ERRORS[code]);
    }
});

checkOptions();

module.exports = {
    config: getValueByFlag("config"),
    input: getValueByFlag("input"),
    output: getValueByFlag("output"),
};
