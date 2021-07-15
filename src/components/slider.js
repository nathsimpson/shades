/** @jsx jsx */
import { jsx } from '@emotion/core';
import { spacing } from '../theme';

const Slider = ({ label, set, colors, base, value, step = 1, max = 100 }) => {
  const inputId = `${base}-${label}`;

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing.small
      }}
    >
      <div
        css={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <label htmlFor={inputId}>{`${label}:`}</label>
        <span>{value}</span>
      </div>

      <input
        type="range"
        id={inputId}
        name="points"
        step={step}
        min={3}
        max={max}
        value={value}
        css={{
          appearance: 'none',
          width: '100%',
          height: 15,
          borderRadius: 5,
          backgroundColor: colors[0],
          backgroundOpacity: 0.1,
          outline: 'none',
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
    </div>
  );
};

export default Slider;
