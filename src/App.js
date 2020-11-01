/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import { Header } from './components/header';
import { Footer } from './components/footer';
import ColorSet from './components/colorSet';
import { colors as themeColors } from './theme';

const App = () => {
  const [colors, setColors] = useState(['#496e92', '#66b29f']);

  const removeColor = (currentColor) => {
    const newColors = colors.filter((color) => color !== currentColor);
    return setColors(newColors);
  };

  return (
    <div
      css={{
        fontFamily: 'Helvetica, sans-serif',
        backgroundColor: themeColors[200],
        color: themeColors[900],
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
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
        {colors.map((color) => (
          <ColorSet
            base={color}
            onRemoveColor={() => removeColor(color)}
            {...{ colors, setColors }}
            key={color}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
