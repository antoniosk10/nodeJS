const checkConfig = require("./checkConfig");
const checkRepeatOptions = require("./checkRepeatOptions");
const checkPathToFiles = require("./checkPathToFiles");

module.exports = () => {
    checkRepeatOptions();
    checkConfig();
    checkPathToFiles();
};
