const atbashCipher = require("@app/utils/ciphers/atbash");

test("is right cipher atbash decode", () => {
    expect(atbashCipher("A")).toEqual("Z");
});

test("returned value is string", () => {
    const result = atbashCipher("A");
    expect(typeof result).toEqual("string");
});

test("length input and output strings is equal ", () => {
    const inputString = "a";
    const outputString = atbashCipher(inputString);
    expect(inputString.length).toEqual(outputString.length);
});
