export const hexToHSL = input => {
  const rgbMap = hexToRgbMap(input);
  const hsl = rgbMapToHslMap(rgbMap);
  const formatted = formatHSL(hsl);
  return formatted;
};

export const rgbToHSL = input => {
  const rgbMap = rgbToRgbMap(input);
  const hsl = rgbMapToHslMap(rgbMap);
  const formatted = formatHSL(hsl);
  return formatted;
};

export const hexToRgbMap = input => {
  let inputColor = input.replace("#", "").toLowerCase();
  let rgb;

  if (inputColor.length === 3) {
    rgb = {
      R: `0x${inputColor.slice(0, 1)}`,
      G: `0x${inputColor.slice(1, 2)}`,
      B: `0x${inputColor.slice(2, 3)}`
    };
  } else if (inputColor.length === 6) {
    rgb = {
      R: `0x${inputColor.slice(0, 2)}`, // parses hexidecimal as decimal
      G: `0x${inputColor.slice(2, 4)}`,
      B: `0x${inputColor.slice(4, 6)}`
    };
  } else {
    return new Error("whoops! Incorrect length");
  }

  return rgb;
};

export const rgbToRgbMap = input => {
  // rgb(12,34,56)

  const rgbMap = input
    .toLowerCase()
    .replace("rgb(", "")
    .replace(")", "")
    .split(",");

  return rgbMap;
};

export const rgbMapToHslMap = input => {
  const R = input.R / 255;
  const G = input.G / 255;
  const B = input.B / 255;

  const min = Math.min(R, G, B);
  const max = Math.max(R, G, B);

  // chroma
  const C = max - min;

  // Lightness
  const L = (max + min) / 2;

  // Saturation
  const S = (() => {
    if (C === 0) {
      return 0;
    } else {
      const s = L < 0.5 ? C / (max + min) : C / (2 - max - min);
      return s;
    }
  })();

  // Hue
  const H = (() => {
    if (C === 0) {
      return 0;
    } else {
      var a;

      switch (max) {
        case R:
          a = (G - B) / C;
          break;

        case G:
          a = 2 + (B - R) / C;
          break;

        case B:
          a = 4 + (R - G) / C;
          break;

        default:
          a = 0;
          break;
      }
      a *= 60;
      a < 0 && (a += 360);
      return a;
    }
  })();

  return {
    H: Math.round(H),
    S: Math.round(S * 100),
    L: Math.round(L * 100)
  };
};

export const formatHSL = ({ H, S, L }) => `hsl(${H}, ${S}%, ${L}%)`;

export const generateColorPack = (inputColor, shades, bound) => {
  const rgbMap = hexToRgbMap(inputColor);
  const inputColorMap = rgbMapToHslMap(rgbMap);

  const min = parseInt(inputColorMap.L) - parseInt(bound);
  const delta = (2 * bound) / (shades - 1);

  let pack = [];

  for (var i = 0; i < shades; i++) {
    const color = {
      H: inputColorMap.H,
      S: inputColorMap.S,
      L: Math.round(min + delta * i)
    };
    pack.push(formatHSL(color));
  }

  return pack;
};
