const INPUT_DATA = require("@app/constants/inputData");
const FLAGS = require("@app/constants/flags");
const {exit} = process;

module.exports = () => {
    Object.keys(FLAGS).forEach(keyFlag => {
        let countOfFlags = 0;
        FLAGS[keyFlag].forEach(flag => {
            INPUT_DATA.forEach(inputArg => {
                if (flag === inputArg) {
                    countOfFlags++;
                }
            });
        });
        if (countOfFlags > 1) {
            exit(2);
        }
    });
};
