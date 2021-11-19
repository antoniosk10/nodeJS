const atbashCipher = require("@app/utils/ciphers/atbash");

test("is right cipher atbash decode", () => {
    expect(atbashCipher("A")).toEqual("Z");
});
