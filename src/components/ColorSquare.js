/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getWcagColor } from '../utils/getWcagColor';

export const ColorSquare = ({ color }) => (
  <div
    css={{
      display: 'flex',
      width: '100%',
      flex: 1,
      padding: 16,
      color: getWcagColor(color),
      backgroundColor: color
    }}
  >
    {color}
  </div>
);
