/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { generateShades } from '../utils/generateShades';

import { ColorSquare } from './ColorSquare';
import { ToolBar } from './Toolbar';

export const ColorSet = ({ base, onRemoveColor }) => {
  const [shades, setShades] = useState(10);
  const [bound, setBound] = useState(30);

  const colors = generateShades(base, shades, bound);

  return (
    <div
      css={{
        display: 'flex',
        flex: 1,
        width: '100%',
        overflowX: 'scroll',
        alignItems: 'stretch'
      }}
    >
      <ToolBar
        {...{
          base,
          colors,
          shades,
          setShades,
          bound,
          setBound,
          onDelete: onRemoveColor
        }}
      />
      <div
        css={{
          display: 'flex',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          overflowX: 'scroll',
          alignItems: 'stretch'
        }}
      >
        {colors.map((value) => (
          <ColorSquare color={value} key={value} />
        ))}
      </div>
    </div>
  );
};
