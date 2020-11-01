/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from './button';
import { colors as themeColors } from '../theme';

export const AddColor = ({ setColors, colors, newColor, setNewColor }) => (
  <div css={{ display: 'flex', alignItems: 'center' }}>
    <label css={{ color: themeColors[600], marginRight: 6 }}>Add color:</label>

    <input
      value={newColor}
      onChange={({ target: { value: newColor } }) => setNewColor(newColor)}
      placeholder="Enter a color"
      css={{
        marginRight: 3,
        paddingLeft: 12,
        background: 'none',
        outline: 'none',
        border: `2px solid ${newColor || themeColors[600]}`,
        height: 24,
        color: themeColors[900],
        borderRadius: 24,
        letterSpacing: 1,

        '&:hover, &:focus': {
          border: `2px solid ${themeColors[900]}`
        }
      }}
    />

    <input
      type="color"
      value={newColor}
      onChange={({ target: { value: newColor } }) => setNewColor(newColor)}
      css={{
        marginRight: 6,
        padding: 3,
        background: 'none',
        outline: 'none',
        border: `2px solid ${newColor || themeColors[600]}`,
        height: 24,
        width: 24,
        borderRadius: 24,

        '&:hover, &:focus': {
          border: `2px solid ${themeColors[900]}`
        },

        '::-webkit-color-swatch-wrapper': {
          background: 'none',
          padding: 0,
          height: 24,
          width: 24
        },

        '::-webkit-color-swatch': {
          border: 'none',
          background: 'none',
          padding: 0,
          height: 24,
          width: 24,
          borderRadius: 15
        }
      }}
    />

    <Button onClick={() => setColors(colors.concat([newColor]))} label="Add" />
  </div>
);
