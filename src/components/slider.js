/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getWcagColor } from '../utils';

const Slider = ({ label, set, colors, base, value, step = 1, max = 100 }) => {
  return (
    <div css={{ display: 'flex', marginRight: 12 }}>
      <p css={{ margin: 0 }}>{label}</p>

      <input
        type="range"
        name="points"
        step={step}
        min={3}
        max={max}
        value={value}
        css={{
          '-webkit-appearance': 'none',
          width: '100%',
          height: 15,
          borderRadius: 5,
          backgroundColor: colors[0],
          backgroundOpacity: 0.1,
          outline: 'none',
          '-webkit-transition': '0.2s',
          transition: 'opacity 0.2s',

          '::-webkit-slider-thumb': {
            '-webkit-appearance': 'none',
            appearance: 'none',
            width: 25,
            height: 25,
            borderRadius: '50%',
            background: colors[colors.length - 1],
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
        onChange={({ target: { value } }) => set(value)}
      />
      <p
        css={{
          color: getWcagColor(base),
          margin: 0
        }}
      >
        {value}
      </p>
    </div>
  );
};

export default Slider;
