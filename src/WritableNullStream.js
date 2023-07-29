const { Writable } = require('stream');

class WritableNullStream extends Writable {
    constructor(options) {
        super(options);
    }

    _write(chunk, encoding, next) {
        next();
    }

    _destroy() {
        this.write(null);
    }
}

module.exports = WritableNullStream;
