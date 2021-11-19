const isUpperLatter = require("@app/utils/isUpperLatter");

test("is right check on upper char", () => {
    expect(isUpperLatter("A")).toBe(true);
});

test("is right check on upper char", () => {
    expect(isUpperLatter("a")).toBe(false);
});
