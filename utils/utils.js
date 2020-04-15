/**
 * Generate Random Number Between 0 and max
 * Can Exclude Certain Value
 * @param max
 * @param exclude
 * @returns {number}
 */
export function generateRandom(max, exclude = undefined) {
    const num = Math.floor(Math.random() * max);
    return (num === exclude) ? generateRandom(max, exclude) : num;
}