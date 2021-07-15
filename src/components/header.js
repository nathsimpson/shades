/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import { AddColor } from './addColor';
import { Button } from './button';
import { colors as themeColors } from '../theme';
import { Stack } from './Stack';

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
        borderBottom: `1px solid ${themeColors[300]}`,
        width: '100%',
        padding: 12,
        boxSizing: 'border-box'
      }}
    >
      <Stack gap="xsmall">
        <h1 css={{ fontSize: 24, margin: 0 }}>Shades</h1>

        <span>
          By{' '}
          <a href="https://www.nathansimpson.design" target="_blank">
            Nathan Simpson
          </a>
        </span>
      </Stack>

      <div css={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <AddColor {...{ setColors, colors, setNewColor, newColor }} />
      </div>

      <Button label="Toggle" onClick={() => setDark(!isDark)} />
    </div>
  );
};
