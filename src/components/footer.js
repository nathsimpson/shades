/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../theme';

export const Footer = () => {
  return (
    <footer
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 12,
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box',
        color: colors[500]
      }}
    >
      <div>
        <a
          css={{
            color: colors[700],
            margin: 6,
            textDecoration: 'none',
            '&:hover': {
              color: colors[800],
              textDecoration: 'underline'
            }
          }}
          href="https://github.com/nathsimpson/shades/blob/master/README.md"
        >
          About Shades
        </a>
        <a
          css={{
            color: colors[700],
            margin: 6,
            textDecoration: 'none',
            '&:hover': {
              color: colors[800],
              textDecoration: 'underline'
            }
          }}
          href="https://github.com/nathsimpson/shades"
        >
          GitHub
        </a>
      </div>

      <span
        css={{
          letterSpacing: 1
        }}
      >
        A project by{' '}
        <a
          css={{ color: colors[700], '&:hover': { color: '#fa6d01' } }}
          href="https://www.nathansimpson.design"
          target="_blank"
        >
          Nathan Simpson
        </a>
      </span>
    </footer>
  );
};
