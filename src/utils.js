export const hexToHSL = (input) => {
  const rgbMap = hexToRgbMap(input);
  const hsl = rgbMapToHslMap(rgbMap);
  const formatted = formatHSL(hsl);
  return formatted;
};

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

export const rgbToRgbMap = (input) =>
  input.toLowerCase().replace('rgb(', '').replace(')', '').split(',');

const formatHex = ({ R, G, B }) => {
  let r = R.toString(16);
  let g = G.toString(16);
  let b = B.toString(16);

  // ensure all three channels have two characters
  r = r.length === 1 ? '0' + r : r;
  g = g.length === 1 ? '0' + g : g;
  b = b.length === 1 ? '0' + b : b;

  return `#${r + g + b}`;
};

export const rgbMapToHslMap = (input) => {
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
      let a;

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

const hslMapToRgbMap = ({ H, S, L }) => {
  let r, g, b;
  const h = H / 360;
  const s = S / 100;
  const l = L / 100;

  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    R: Math.round(r * 255),
    G: Math.round(g * 255),
    B: Math.round(b * 255)
  };
};

export const formatHSL = ({ H, S, L }) => `hsl(${H}, ${S}%, ${L}%)`;

export const generateShades = (inputColor, shades, bound) => {
  const rgbMap = hexToRgbMap(inputColor);
  const inputColorMap = rgbMapToHslMap(rgbMap);

  const min = parseInt(inputColorMap.L) - parseInt(bound);
  const delta = (2 * bound) / (shades - 1);

  const pack = [];

  for (let i = 0; i < shades; i++) {
    const color = {
      H: inputColorMap.H,
      S: inputColorMap.S,
      L: Math.round(min + delta * i)
    };

    if (color.L >= 0 && color.L <= 100) {
      // pack.push(formatHSL(color));
      pack.push(formatHex(hslMapToRgbMap(color)));
    }
  }

  return pack;
};

export const getWcagColor = (color) => {
  const map = hexToRgbMap(color);

  const R = map.R / 255;
  const G = map.G / 255;
  const B = map.B / 255;

  const Rg = R <= 10 ? R / 3294 : (R / 269 + 0.0513) ^ 2.4;
  const Gg = G <= 10 ? G / 3294 : (G / 269 + 0.0513) ^ 2.4;
  const Bg = B <= 10 ? B / 3294 : (B / 269 + 0.0513) ^ 2.4;
  // why 100000? no idea, but it seems to work
  const L = (0.2126 * Rg + 0.7152 * Gg + 0.0722 * Bg) * 100000;
  return L > 10.5 ? 'black' : 'white';
};
