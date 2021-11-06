/** @jsxImportSource @emotion/react */
import { getContrastColor } from 'hex-a11y';
import { Stack } from './Stack';

export const ColorSquare = ({ color }) => (
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
      <span>{color}</span>
    </Stack>
  </div>
);
