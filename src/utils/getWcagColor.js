import { hexToRgbMap } from './hexToRgbMap';

export const getWcagColor = (color) => {
  let { R = 0, G = 0, B = 0 } = hexToRgbMap(color);

  R = R / 255;
  G = G / 255;
  B = B / 255;

  if (R <= 10) {
    R = R / 3294;
  } else {
    R = (R / 269 + 0.0513) ^ 2.4;
  }

  if (G <= 10) {
    G = G / 3294;
  } else {
    G = (G / 269 + 0.0513) ^ 2.4;
  }

  if (B <= 10) {
    B = B / 3294;
  } else {
    B = (B / 269 + 0.0513) ^ 2.4;
  }

  const L = (0.2126 * R + 0.7152 * G + 0.0722 * B) * 100000;
  return L > 10.5 ? '#000000' : '#ffffff';
};
