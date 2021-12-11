/** @jsxImportSource @emotion/react */
import { Button } from './button';
import { useTheme } from '../hooks/themeContext';
import { ColorSliders } from './colorSliders';

const COLOR_PICKER_SIZE = 16;

export const AddColor = ({ setColors, colors, value, onChange }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        display: 'flex',
        marginTop: theme.spacing.xxxlarge,
        marginBottom: theme.spacing.xxxlarge,
        gap: theme.spacing.small,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <label css={{ marginRight: 6 }}>Add color:</label>

      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          border: `2px solid ${value || theme.color.backgroundAlt}`,
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
            color: theme.color.foreground,
            borderRadius: COLOR_PICKER_SIZE,
            letterSpacing: 1
          }}
        />
        <ColorInput value={value} onChange={onChange} />
      </div>

      <ColorSliders value={value} onChange={onChange} />

      <Button
        color={value}
        onClick={() => setColors(colors.concat([value]))}
        label="Add"
      />
    </div>
  );
};

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
