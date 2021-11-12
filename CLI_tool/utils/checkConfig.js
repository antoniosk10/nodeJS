const getValueByFlag = require("./getValueByFlag");
const MAP_OF_CONFIGS = require("../constants/configs");
const {exit} = process;

module.exports = () => {
    const valueConfig = getValueByFlag("config");
    const stepsOfDecode = valueConfig.split("-");
    stepsOfDecode.forEach(config => {
        if (MAP_OF_CONFIGS.indexOf(config) === -1) {
            exit(1);
        }
    });
    return true;
};
