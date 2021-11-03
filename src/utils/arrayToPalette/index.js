/**
 * Generates a color palette object.
 * @param {array} colors - An array of colors
 * @return {object} The generated color palette object.
 */
export const arrayToPalette = (array) =>
  array.reduce((acc, value, i) => {
    acc[(i + 1) * 100] = value;
    return acc;
  }, {});
