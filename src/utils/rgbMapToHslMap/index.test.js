const { rgbMapToHslMap } = require('./index');

const { hexToRgbMap } = require('../hexToRgbMap');
const { exampleColors } = require('../testHelpers');

export const formatHSL = ({ h, s, l }) => `hsl(${h}, ${s}%, ${l}%)`;

export const hexToHSL = (input) => {
  const rgbMap = hexToRgbMap(input);
  const hsl = rgbMapToHslMap(rgbMap);
  const formatted = formatHSL(hsl);
  return formatted;
};

// expects correct Hue
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Hue for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).h).toBe(hslObj.h);
  });
});

// expects correct Saturation
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Saturation for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).s).toBe(hslObj.s);
  });
});

// expects correct Lightness
exampleColors.forEach(({ name, rgbObj, hslObj }) => {
  test(`expects correct Lightness for ${name}`, () => {
    expect(rgbMapToHslMap(rgbObj).l).toBe(hslObj.l);
  });
});

// expects correct HSL
exampleColors.forEach(({ name, hex, hsl }) => {
  test(`${name} converts to ${hsl}`, () => {
    expect(hexToHSL(hex)).toBe(hsl);
  });
});
