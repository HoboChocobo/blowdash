import { filter } from "./filter.js";
import { exists } from "./exists.js";

export const filters = {
	existence: filter(exists)
};