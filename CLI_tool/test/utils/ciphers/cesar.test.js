const cesarCipher = require("@app/utils/ciphers/cesar");

test("is right encode by cipher cesar with shift 1 ", () => {
    expect(cesarCipher("encode", "A", 1)).toEqual("B");
});

test("is right decode by cipher cesar with shift 1 ", () => {
    expect(cesarCipher("decode", "A", 1)).toEqual("Z");
});

test("is right encode by cipher cesar with shift 8 ", () => {
    expect(cesarCipher("encode", "A", 8)).toEqual("I");
});

test("is right decode by cipher cesar with shift 8 ", () => {
    expect(cesarCipher("decode", "A", 8)).toEqual("S");
});
