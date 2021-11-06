/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { Header } from './components/header';
import { ColorSet } from './components/colorSet';
import { AddColor } from './components/addColor';
import { Stack } from './components/Stack';
import { ThemeProvider, useTheme } from './hooks/themeContext';

const App = () => {
  const [colors, setColors] = useState(['#496e92', '#66b29f']);
  const [newColor, setNewColor] = useState('#ff0000');
  const theme = useTheme();

  const removeColor = (currentColor) => {
    const newColors = colors.filter((color) => color !== currentColor);
    return setColors(newColors);
  };

  return (
    <div
      css={{
        fontFamily: 'Helvetica, sans-serif',
        backgroundColor: theme.color.background,
        color: theme.color.foreground,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

        a: {
          color: theme.color.action,
          textDecoration: 'none',
          '&:hover': {
            color: theme.color.action,
            textDecoration: 'underline'
          }
        }
      }}
    >
      <Header {...{ colors, setColors }} />
      <div
        css={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          width: '100%',
          alignItems: 'stretch'
        }}
      >
        <Stack gap="medium">
          {colors.map((color) => (
            <ColorSet
              base={color}
              onRemoveColor={() => removeColor(color)}
              {...{ colors, setColors }}
              key={color}
            />
          ))}
        </Stack>
        <AddColor
          {...{ setColors, colors, onChange: setNewColor, value: newColor }}
        />
      </div>
    </div>
  );
};

const Root = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Root;
