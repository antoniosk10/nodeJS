const {fork} = require("child_process");
const path = require("path");

const runTool = jest.fn(args => {
    const childProccess = fork(
        path.join(process.cwd(), "CLI_tool", "my_ciphering_cli"),
        args,
        {cwd: path.join(process.cwd(), "CLI_tool"), silent: true},
    );

    return new Promise(resolve => {
        childProccess.on("exit", data => {
            resolve(data);
        });
    });
});

describe("error scenarios", () => {
    test("repeat args", () => {
        const args = ["-c", "C1-C1-A-R0", "-c", "C0"];
        return runTool(args).then(data => {
            expect(data).toBe(2);
        });
    });

    test("dont pass config args", () => {
        const args = ["-i", "input.txt", "-o", "output.txt"];
        return runTool(args).then(data => {
            expect(data).toBe(1);
        });
    });

    test("pass wrong path to input file", () => {
        const args = [
            "-c",
            "C1-C1-R0-A",
            "-i",
            "input111.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(3);
        });
    });

    test("pass wrong path to output file", () => {
        const args = [
            "-c",
            "C1-C1-R0-A",
            "-i",
            "input111.txt",
            "-o",
            "output111.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(3);
        });
    });

    test("pass wrong config arg", () => {
        const args = [
            "-c",
            "C1-C1!-R0-A",
            "-i",
            "input.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(1);
        });
    });
});

describe("success scenarios", () => {
    test("cipher usage scenarios #1", () => {
        const args = [
            "-c",
            "C1-C1-R0-A",
            "-i",
            "input.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(0);
        });
    });

    test("cipher usage scenarios #2", () => {
        const args = [
            "-c",
            "C1-C0-A-R1-R0-A-R0-R0-C1-A",
            "-i",
            "input.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(0);
        });
    });

    test("cipher usage scenarios #3", () => {
        const args = [
            "-c",
            "A-A-A-R1-R0-R0-R0-C1-C1-A",
            "-i",
            "input.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(0);
        });
    });

    test("cipher usage scenarios #4", () => {
        const args = [
            "-c",
            "A-A-A-R1-R0-R0-R0-C1-C1-A",
            "-i",
            "input.txt",
            "-o",
            "output.txt",
        ];
        return runTool(args).then(data => {
            expect(data).toBe(0);
        });
    });
});
