export { ReadableNullStream } from "./ReadableNullStream.mjs";
export { WritableNullStream } from "./WritableNullStream.mjs";

import { ReadableNullStream } from "./ReadableNullStream.mjs";
import { WritableNullStream } from "./WritableNullStream.mjs";

export function createReadStream(options) {
    return new ReadableNullStream(options);
}

export function createWriteStream(options) {
    return new WritableNullStream(options);
}
