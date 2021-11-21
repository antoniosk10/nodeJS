const transformString = require("@app/utils/transformString");

test("is right transform string by C1 config", () => {
    expect(transformString("Hello Word", "C1")).toEqual("Ifmmp Xpse");
});
test("is right transform string by C0 config", () => {
    expect(transformString("Hello Word", "C0")).toEqual("Gdkkn Vnqc");
});
test("is right transform string by R1 config", () => {
    expect(transformString("Hello Word", "R1")).toEqual("Pmttw Ewzl");
});
test("is right transform string by R0 config", () => {
    expect(transformString("Hello Word", "R0")).toEqual("Zwddg Ogjv");
});
test("is right transform string by A config", () => {
    expect(transformString("Hello Word", "A")).toEqual("Svool Dliw");
});
