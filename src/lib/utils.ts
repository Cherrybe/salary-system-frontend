import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A shorthand for `twMerge(clsx(...inputs))` which returns a cleanly merged class name
 * string from the inputs.
 *
 * @param inputs - The class names to be merged.
 * @returns A merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
