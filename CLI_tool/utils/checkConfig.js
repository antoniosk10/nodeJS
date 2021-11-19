const getValueByFlag = require("./getValueByFlag");
const MAP_OF_CONFIGS = require("@app/constants/configs");
const {exit} = process;

module.exports = () => {
    const valueConfig = getValueByFlag("config");
    const stepsOfEncode = valueConfig.split("-");
    stepsOfEncode.forEach(config => {
        if (Object.keys(MAP_OF_CONFIGS).indexOf(config) === -1) {
            exit(1);
        }
    });
    return true;
};
