const {exit, stdin, stdout} = process;
const getValueByFlag = require("./getValueByFlag");

module.exports = () => {
    if (!getValueByFlag("input")) {
        stdout.write("Введите строку для кодирования:");
        stdin.once("data", data => {
            console.log(data);
        });
    }
};
