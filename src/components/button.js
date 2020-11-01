/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../theme';
import { getWcagColor } from '../utils';
import hexAlpha from 'hex-alpha';

export const Button = ({ label, onClick, color }) => {
  const primaryColor = color || colors['400'];
  return (
    <button
      onClick={onClick}
      css={{
        padding: '8px 12px',
        borderRadius: 6,
        backgroundColor: hexAlpha(primaryColor, 0.7),
        color: getWcagColor(primaryColor),
        border: 'none',
        margin: '0px 2px',

        '&:hover': {
          backgroundColor: primaryColor
        }

        // '&:focus': { outline: 'none' }
      }}
    >
      {label}
    </button>
  );
};
