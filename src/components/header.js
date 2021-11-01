/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import { AddColor } from './addColor';

export const Header = ({ colors, setColors, bound, setBound }) => {
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
      <h1 css={{ fontSize: 24, margin: 0, flex: 1 }}>Shades</h1>

      <div css={{ display: 'flex' }}>
        {colors.map((c) => (
          <Dot color={c} key={c} />
        ))}
      </div>

      <div css={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
        <AddColor {...{ setColors, colors, setNewColor, newColor }} />
      </div>
    </div>
  );
};

const Dot = ({ color }) => (
  <div
    css={{
      height: 12,
      width: 12,
      marginLeft: 3,
      marginRight: 3,
      borderRadius: 6,
      backgroundColor: color
    }}
  />
);
