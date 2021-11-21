const checkConfig = require("@app/utils/checkConfig");
const INPUT_DATA = require("@app/constants/inputData");

jest.mock("@app/constants/inputData");

afterEach(() => {
    INPUT_DATA.length = 0;
});

test("test right config should return true", () => {
    INPUT_DATA.push("-c", "C1-A-R1-R0");
    expect(checkConfig()).toBe(true);
});

test("tests checkConfig with process.exit", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(number => {
        throw new Error("process.exit: " + number);
    });
    INPUT_DATA.push("-c", "C1!-A");
    expect(() => {
        checkConfig();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});
