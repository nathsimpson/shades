import { hslMapToRgbMap } from '../../utils/hslMapToRgbMap';
import { formatHex } from '../../utils/formatHex';

export const hslMapToHex = (hsl) => {
  const rgbMap = hslMapToRgbMap(hsl);
  return formatHex(rgbMap);
};
