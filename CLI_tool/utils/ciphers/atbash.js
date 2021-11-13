const ALPHABET = require("../../constants/alphabet");
const isUpperLatter = require("../isUpperLatter");

module.exports = char => {
    const indexOfChar = ALPHABET.indexOf(char.toLowerCase());
    const reverseAlphabet = ALPHABET.slice().reverse();
    const transformChar = isUpperLatter(char)
        ? reverseAlphabet[indexOfChar].toUpperCase()
        : reverseAlphabet[indexOfChar];
    return indexOfChar !== -1 ? transformChar : char;
};
