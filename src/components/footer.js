/** @jsx jsx */
import { jsx } from '@emotion/core';
import { colors } from '../theme';
import { Stack } from './Stack';

export const Footer = () => {
  return (
    <footer
      css={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: 12,
        textAlign: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <Stack orientation="horizontal" gap="medium">
        <a
          target="_blank"
          href="https://github.com/nathsimpson/shades/blob/master/README.md"
        >
          About
        </a>
        <a target="_blank" href="https://github.com/nathsimpson/shades">
          GitHub
        </a>
      </Stack>

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
