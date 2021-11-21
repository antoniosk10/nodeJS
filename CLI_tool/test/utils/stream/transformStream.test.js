const transformStream = require("@app/stream/transformStream");
const {Transform} = require("stream");

test("instance is instanse of Transform", () => {
    expect(new transformStream()).toBeInstanceOf(Transform);
});

test("callback will be call", () => {
    const callback = jest.fn();
    const instaceOfClass = new transformStream();
    instaceOfClass._transform("Hello Word", "_", callback);
    expect(callback).toHaveBeenCalled();
});
