/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getContrastColor } from 'hex-a11y';

export const ColorSquare = ({ color }) => (
  <div
    css={{
      display: 'flex',
      width: '100%',
      flex: 1,
      padding: 16,
      color: getContrastColor(color),
      backgroundColor: color
    }}
  >
    {color}
  </div>
);
