const ALPHABET = require("../../constants/alphabet");
const COUNT_OF_LATTERS = 26;
const isUpperLatter = require("../isUpperLatter");

module.exports = (mode, char, shift) => {
    const indexOfChar = ALPHABET.indexOf(char.toLowerCase());
    const indexOfCiper =
        mode === "encode" ? indexOfChar + shift : indexOfChar - shift;
    const indexOfTransformChar =
        (indexOfCiper + COUNT_OF_LATTERS) % COUNT_OF_LATTERS;
    const transformChar = isUpperLatter(char)
        ? ALPHABET[indexOfTransformChar].toUpperCase()
        : ALPHABET[indexOfTransformChar];
    return indexOfChar !== -1 ? transformChar : char;
};
