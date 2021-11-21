const cesarCipher = require("@app/utils/ciphers/cesar");

describe("test Cesar cipher", () => {
    test("is right encode by cipher cesar with shift 1 ", () => {
        expect(cesarCipher("encode", "A", 1)).toEqual("B");
    });

    test("is right decode by cipher cesar with shift 1 ", () => {
        expect(cesarCipher("decode", "A", 1)).toEqual("Z");
    });
});

describe("test ROT-8 cipher", () => {
    test("is right encode by cipher cesar with shift 8 ", () => {
        expect(cesarCipher("encode", "A", 8)).toEqual("I");
    });

    test("is right decode by cipher cesar with shift 8 ", () => {
        expect(cesarCipher("decode", "A", 8)).toEqual("S");
    });
});

describe("general test function", () => {
    test("returned value is string", () => {
        const result = cesarCipher("decode", "A", 8);
        expect(typeof result).toEqual("string");
    });

    test("length input and output strings is equal ", () => {
        const inputString = "a";
        const outputString = cesarCipher("decode", inputString, 8);
        expect(inputString.length).toEqual(outputString.length);
    });
});
