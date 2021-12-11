/** @jsxImportSource @emotion/react */
import { Button } from './button';
import { useThemeContext } from '../hooks/themeContext';

export const Header = () => {
  const { themeName, onThemeChange } = useThemeContext();

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
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12
        }}
      >
        <h1 css={{ fontSize: 24, margin: 0 }}>Shades</h1>
        <a
          target="_blank"
          href="https://github.com/nathsimpson/shades/blob/master/README.md"
          rel="noreferrer"
        >
          About
        </a>
        <a
          target="_blank"
          href="https://github.com/nathsimpson/shades"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
      <Button
        label={themeName === 'light' ? 'Dark' : 'Light'}
        onClick={() => {
          onThemeChange(themeName === 'light' ? 'dark' : 'light');
        }}
      />
    </div>
  );
};
