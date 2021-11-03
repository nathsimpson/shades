/**
 * Generates a color palette object.
 * @param {array} colors - An array of colors
 * @return {object} The generated color palette object.
 */
export const arrayToPalette = (array) =>
  array.reduce((acc, { lightness, value }) => {
    acc[lightness] = value;
    return acc;
  }, {});
