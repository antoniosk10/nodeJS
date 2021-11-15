const checkConfig = require("./checkConfig");
const checkRepeatOptions = require("./checkRepeatOptions");

module.exports = () => {
    checkRepeatOptions();
    checkConfig();
};
