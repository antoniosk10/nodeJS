const checkRepeatOptions = require("@app/utils/checkRepeatOptions");
const INPUT_DATA = require("@app/constants/inputData");

jest.mock("@app/constants/inputData");

afterEach(() => {
    INPUT_DATA.length = 0;
});

test("test repeat flags should return undefined", () => {
    INPUT_DATA.push("-c", "C1-A-R1-R0");
    expect(checkRepeatOptions()).toBeUndefined();
});

test("tests checkConfig with process.exit", async () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(number => {
        throw new Error("process.exit: " + number);
    });
    INPUT_DATA.push("-c", "C1-A-R1-R0", "-i", "-input");
    expect(() => {
        checkRepeatOptions();
    }).toThrow();
    expect(mockExit).toHaveBeenCalledWith(2);
    mockExit.mockRestore();
});
