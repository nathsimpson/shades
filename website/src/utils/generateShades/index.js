import { hexToRgbMap } from '../hexToRgbMap';
import { rgbMapToHslMap } from '../rgbMapToHslMap';
import { hslMapToRgbMap } from '../hslMapToRgbMap';

export const generateShades = (inputColor, numberOfShades, bound) => {
  const rgbMap = hexToRgbMap(inputColor);
  const inputColorMap = rgbMapToHslMap(rgbMap);

  const min = parseInt(inputColorMap.L) - parseInt(bound);
  const delta = (2 * bound) / (numberOfShades - 1);

  const pack = [];

  for (let i = 0; i < numberOfShades; i++) {
    const lightness = Math.round(min + delta * i);

    if (lightness >= 0 && lightness <= 100) {
      pack.push(
        formatHex(
          hslMapToRgbMap({
            H: inputColorMap.H,
            S: inputColorMap.S,
            L: lightness
          })
        )
      );
    }
  }

  return pack;
};

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
