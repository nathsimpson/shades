/**
 * Generates a color palette object.
 * @param {array} colors - An array of colors
 * @return {object} The generated color palette object.
 */
export const arrayToPalette = (array) => {
  const palette = {};
  for (let i = 0; i < array.length; i++) {
    palette[(i + 1) * 100] = array[i];
  }
  return palette;
};
