/** @jsxImportSource @emotion/react */
import { hexToRgbMap } from '../utils/hexToRgbMap';
import { rgbMapToHslMap } from '../utils/rgbMapToHslMap';
import { hslMapToRgbMap } from '../utils/hslMapToRgbMap';
import { formatHex } from '../utils/formatHex';
import { Stack } from './Stack';

const hexToHslMap = (hex) => {
  const rgbMap = hexToRgbMap(hex);
  return rgbMapToHslMap(rgbMap);
};

const hslMapToHex = (hsl) => {
  const rgbMap = hslMapToRgbMap(hsl);
  return formatHex(rgbMap);
};

export const ColorSliders = ({ value: currentValue, onChange }) => {
  const currentHSL = hexToHslMap(currentValue);

  const onUpdate = (newHSL) => {
    const newValue = { ...currentHSL, ...newHSL };
    onChange(hslMapToHex(newValue));
  };

  return (
    <Stack>
      {/* <SLpicker currentHue={currentHSL.H} /> */}

      <input
        type="range"
        name="hue"
        min={0}
        max={255}
        value={currentHSL.H}
        onChange={(e) => onUpdate({ H: e.target.value })}
        css={{
          WebkitAppearance: 'none',
          appearance: 'none',
          width: '100%',
          height: 15,
          // borderRadius: 5,
          // backgroundColor: 'red',
          background:
            'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
          backgroundOpacity: 0.1,
          outline: 'none',
          WebkitTransition: '0.2s',
          transition: 'opacity 0.2s',

          '::-webkit-slider-thumb': {
            WebkitAppearance: 'none',
            appearance: 'none',
            width: 25,
            height: 25,
            borderRadius: '50%',
            background: '#fff',
            cursor: 'pointer'
          },

          '::-moz-range-thumb': {
            width: 25,
            height: 25,
            borderRadius: '50%',
            background: '#fff',
            cursor: 'pointer'
          }
        }}
      />
    </Stack>
  );
};

// const SLpicker = ({ currentHue }) => {
//   return (
//     <div
//       css={{
//         width: '100%',
//         height: 200,
//         background: `linear-gradient(to right, #fff 0%, ${hslMapToHex({
//           H: currentHue,
//           S: 100,
//           L: 50
//         })} 100%)`
//       }}
//     >
//       <div
//         css={{
//           width: '100%',
//           height: 200,
//           background: 'linear-gradient(to bottom, #00000000 0%, #000 100%)'
//         }}
//       />
//     </div>
//   );
// };
