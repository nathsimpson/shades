/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';

import Header from './components/header';
import ColorSet from './components/colorSet';

const App = () => {
  const [colors, setColors] = useState(['#fa6d01', '#203040', '#CFE7E1']);

  const removeColor = (currentColor) => {
    const newColors = colors.filter((color) => color !== currentColor);
    return setColors(newColors);
  };

  return (
    <div
      css={{
        fontFamily: 'Helvetica, sans-serif',
        backgroundColor: '#203040',
        color: '#e7edf3',
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
    </div>
  );
};

export default App;
