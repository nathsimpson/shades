/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from './button';
import { colors as themeColors } from '../theme';

const COLOR_PICKER_SIZE = 16;

export const AddColor = ({ setColors, colors, value, onChange }) => (
  <div css={{ display: 'flex', alignItems: 'center' }}>
    <label css={{ color: themeColors[700], marginRight: 6 }}>Add color:</label>

    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        border: `2px solid ${value || themeColors[600]}`,
        borderRadius: 6,
        padding: 4,
        color: value
      }}
    >
      <input
        value={value}
        onChange={({ target: { value: newColor } }) => onChange(newColor)}
        placeholder="Enter a color"
        css={{
          background: 'none',
          outline: 'none',
          border: 'none',
          height: COLOR_PICKER_SIZE,
          color: themeColors[900],
          borderRadius: COLOR_PICKER_SIZE,
          letterSpacing: 1
        }}
      />
      <Icon />
      <ColorInput value={value} onChange={(newColor) => onChange(newColor)} />
    </div>

    <Button onClick={() => setColors(colors.concat([value]))} label="Add" />
  </div>
);

const ColorInput = ({ value, onChange }) => {
  return (
    <input
      type="color"
      value={value}
      onChange={({ target: { value: newColor } }) => onChange(newColor)}
      css={{
        background: 'none',
        outline: 'none',
        border: `1px solid ${value}`,
        height: COLOR_PICKER_SIZE,
        width: COLOR_PICKER_SIZE,
        borderRadius: COLOR_PICKER_SIZE,

        '::-webkit-color-swatch-wrapper': {
          background: 'none',
          padding: 0,
          height: COLOR_PICKER_SIZE,
          width: COLOR_PICKER_SIZE
        },

        '::-webkit-color-swatch': {
          border: 'none',
          background: 'none',
          padding: 0,
          height: COLOR_PICKER_SIZE,
          width: COLOR_PICKER_SIZE,
          borderRadius: COLOR_PICKER_SIZE
        }
      }}
    />
  );
};

const Icon = () => (
  <svg
    width={14}
    aria-hidden="true"
    focusable="false"
    data-icon="eye-dropper"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"
      className=""
    ></path>
  </svg>
);
