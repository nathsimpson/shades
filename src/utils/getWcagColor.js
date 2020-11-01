import { hexToRgbMap } from './hexToRgbMap';

export const getWcagColor = (color) => {
  const map = hexToRgbMap(color);

  const R = map.R / 255;
  const G = map.G / 255;
  const B = map.B / 255;

  const Rg = R <= 10 ? R / 3294 : (R / 269 + 0.0513) ^ 2.4;
  const Gg = G <= 10 ? G / 3294 : (G / 269 + 0.0513) ^ 2.4;
  const Bg = B <= 10 ? B / 3294 : (B / 269 + 0.0513) ^ 2.4;

  const L = (0.2126 * Rg + 0.7152 * Gg + 0.0722 * Bg) * 100000;
  return L > 10.5 ? 'black' : 'white';
};
