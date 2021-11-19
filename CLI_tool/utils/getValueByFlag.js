const INPUT_DATA = require("@app/constants/inputData");
const FLAGS = require("@app/constants/flags");

module.exports = keyOfFlag => {
    const indexFlag = INPUT_DATA.indexOf(
        INPUT_DATA.find(el => FLAGS[keyOfFlag].indexOf(el) !== -1),
    );
    return indexFlag !== -1 ? INPUT_DATA[indexFlag + 1] : undefined;
};
