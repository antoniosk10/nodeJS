const cesarCipher = require("../utils/ciphers/cesar");
const atbashCipher = require("../utils/ciphers/atbash");

module.exports = {
    C1: char => cesarCipher("encode", char, 1),
    C0: char => cesarCipher("decode", char, 1),
    R1: char => cesarCipher("encode", char, 8),
    R0: char => cesarCipher("decode", char, 8),
    A: atbashCipher,
};
