import { Writable } from 'stream';

export class WritableNullStream extends Writable {
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
