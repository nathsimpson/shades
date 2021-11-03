/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { AddColor } from './addColor';
import { Button } from './button';

export const Header = ({
  colors,
  setColors,
  isDark,
  setDark,
  bound,
  setBound
}) => {
  const [newColor, setNewColor] = useState('#ff0000');

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
        label={!isDark ? 'Dark' : 'Light'}
        onClick={() => setDark(!isDark)}
      />
    </div>
  );
};
