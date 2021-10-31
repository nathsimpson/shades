/** @jsx jsx */
import { jsx } from '@emotion/core';
import { getContrastColor } from 'hex-a11y';
import { Stack } from './Stack';

export const ColorSquare = ({ color, lightness }) => (
  <div
    css={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      flex: 1,
      padding: 16,
      color: getContrastColor(color),
      backgroundColor: color
    }}
  >
    <Stack gap="xsmall">
      <span css={{ fontWeight: 'bold', fontSize: '1.25em' }}>{lightness}</span>
      <span>{color}</span>
    </Stack>
  </div>
);
