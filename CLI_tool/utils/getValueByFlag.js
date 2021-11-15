const INPUT_DATA = require("../constants/inputData");
const FLAGS = require("../constants/flags");

module.exports = keyOfFlag => {
    const indexFlag = INPUT_DATA.indexOf(
        INPUT_DATA.find(el => FLAGS[keyOfFlag].indexOf(el) !== -1),
    );
    return indexFlag !== -1 ? INPUT_DATA[indexFlag + 1] : undefined;
};
