const { rgbMapToHslMap } = require('./index');

const { hexToRgbMap } = require('../hexToRgbMap');
const { exampleColors } = require('../testHelpers');

export const formatHSL = ({ H, S, L }) => `hsl(${H}, ${S}%, ${L}%)`;

export const hexToHSL = (input) => {
  const rgbMap = hexToRgbMap(input);
  const hsl = rgbMapToHslMap(rgbMap);
  const formatted = formatHSL(hsl);
  return formatted;
};

// expects correct Hue
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Hue for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).H).toBe(hslObj.H);
  });
});

// expects correct Saturation
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Saturation for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).S).toBe(hslObj.S);
  });
});

// expects correct Lightness
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Lightness for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).L).toBe(hslObj.L);
  });
});

// expects correct HSL
exampleColors.forEach(({ name, hex, hsl }) => {
  test(`${name} converts to ${hsl}`, () => {
    expect(hexToHSL(hex)).toBe(hsl);
  });
});
