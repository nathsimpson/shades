/** @jsxImportSource @emotion/react */
import { jsx, Global } from '@emotion/react';
import { useState } from 'react';
import Head from 'next/head';

import { Header } from '../src/components/header';
import { Footer } from '../src/components/footer';
import ColorSet from '../src/components/colorSet';
import { colors as themeColors } from '../src/theme';

export default function Home() {
  const [colors, setColors] = useState(['#496e92', '#66b29f']);

  const removeColor = (currentColor) => {
    const newColors = colors.filter((color) => color !== currentColor);
    return setColors(newColors);
  };

  return (
    <div>
      <Head>
        <title>Shades</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Global
        styles={{
          body: {
            backgroundColor: themeColors[200],
            color: themeColors[900],
            fontFamily: 'Helvetica, sans-serif',
            margin: 0
          }
        }}
      />

      <div
        css={{
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
    </div>
  );
}
