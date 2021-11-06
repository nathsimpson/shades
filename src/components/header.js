/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { AddColor } from './addColor';
import { Button } from './button';
import { useThemeContext } from '../hooks/themeContext';

export const Header = ({ colors, setColors }) => {
  const [newColor, setNewColor] = useState('#ff0000');
  const { themeName, onThemeChange } = useThemeContext();

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 12,
        boxSizing: 'border-box'
      }}
    >
      <h1 css={{ fontSize: 24, margin: 0 }}>Shades</h1>

      <div css={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <AddColor
          {...{ setColors, colors, onChange: setNewColor, value: newColor }}
        />
      </div>

      <Button
        label={themeName === 'light' ? 'Dark' : 'Light'}
        onClick={() => {
          onThemeChange(themeName === 'light' ? 'dark' : 'light');
        }}
      />
    </div>
  );
};
