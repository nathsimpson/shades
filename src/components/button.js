/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../theme';

export const Button = ({ label, onClick }) => (
  <button
    onClick={onClick}
    css={{
      padding: '6px 12px',
      borderRadius: 6,
      backgroundColor: colors['300'],
      color: colors[900],
      border: 'none',
      margin: '0px 2px',

      '&:hover': {
        backgroundColor: colors['500']
      },

      '&:focus': { outline: 'none' }
    }}
  >
    {label}
  </button>
);
