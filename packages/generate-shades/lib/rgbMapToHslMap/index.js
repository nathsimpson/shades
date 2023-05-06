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
