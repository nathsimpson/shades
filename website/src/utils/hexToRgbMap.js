export const hexToRgbMap = (input) => {
  const inputColor = input.replace('#', '').toLowerCase();

  if (inputColor.length === 3) {
    return {
      R: `0x${inputColor.slice(0, 1)}`,
      G: `0x${inputColor.slice(1, 2)}`,
      B: `0x${inputColor.slice(2, 3)}`
    };
  } else if (inputColor.length === 6) {
    return {
      R: `0x${inputColor.slice(0, 2)}`, // parses hexadecimal as decimal
      G: `0x${inputColor.slice(2, 4)}`,
      B: `0x${inputColor.slice(4, 6)}`
    };
  } else {
    return new Error('whoops! Incorrect length');
  }
};
