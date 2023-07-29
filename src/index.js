const { ReadableNullStream } = require("./ReadableNullStream.js");
const { WritableNullStream } = require("./WritableNullStream.js");

function createReadStream(options) {
    return new ReadableNullStream(options);
}

function createWriteStream(options) {
    return new WritableNullStream(options);
}

module.exports = {
    ReadableNullStream: ReadableNullStream,
    WritableNullStream: WritableNullStream,
    createReadStream: createReadStream,
    createWriteStream: createWriteStream
};
