import { pipe } from "./pipe.js";

export const map = (...mapFunctions) => (array) => array.map(pipe(...mapFunctions));