const getValueByFlag = require("@app/utils/getValueByFlag");

jest.mock("@app/constants/inputData", () => {
    return ["-c", "C1", "-i", "./input.txt", "-o", "./output.txt"];
});

test("right config of chipers by flag", () => {
    expect(getValueByFlag("config")).toBe("C1");
});

test("right config of input path by flag", () => {
    expect(getValueByFlag("input")).toBe("./input.txt");
});

test("right config of output path by flag", () => {
    expect(getValueByFlag("output")).toBe("./output.txt");
});
