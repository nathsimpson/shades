export const formatHex = ({ R, G, B }) => {
  let r = R.toString(16);
  let g = G.toString(16);
  let b = B.toString(16);

  // ensure all three channels have two characters
  r = r.length === 1 ? '0' + r : r;
  g = g.length === 1 ? '0' + g : g;
  b = b.length === 1 ? '0' + b : b;

  return `#${r + g + b}`;
};
