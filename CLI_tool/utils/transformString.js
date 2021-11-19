const MAP_OF_CONFIGS = require("@app/constants/configs");

module.exports = (string, config) => {
    const charactersOfString = string.split("");
    const transformString = charactersOfString.map(char =>
        MAP_OF_CONFIGS[config](char),
    );
    return transformString.join("");
};
