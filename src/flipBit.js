import { pipe } from "./pipe.js";
import { not } from "./not.js";
import { toBit } from "./toBit.js";

export const flipBit = pipe(
	not,
	toBit
);