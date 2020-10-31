/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Slider from './slider';
import { Button } from './button';
import { generateShades, getWcagColor } from '../utils';

const ColorSet = ({ base, setColors, colors: rootColors }) => {
  const [shades, setShades] = useState(11);
  const [bound, setBound] = useState(10);

  const colors = generateShades(base, shades, bound);

  // move to app.js
  const removeColor = () => {
    const newColors = rootColors.filter((col) => col !== base);
    return setColors(newColors);
  };

  return (
    <div
      css={{
        display: 'flex',
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'stretch'
      }}
    >
      <div
        css={{
          display: 'flex',
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          alignItems: 'stretch'
        }}
      >
        {colors.map((shade) => (
          <ColorSquare color={shade} key={shade} />
        ))}
      </div>
      <ToolBar
        onDelete={removeColor}
        {...{ base, colors, shades, setShades, bound, setBound }}
      />
    </div>
  );
};

const ToolBar = ({
  base,
  colors,
  shades,
  setShades,
  bound,
  setBound,
  onDelete
}) => {
  const inputId = `text-${base}`;
  const [copyButtonLabel, setCopyButtonLabel] = useState('Copy shades');

  const onCopy = () => {
    const copyText = document.getElementById(inputId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    setCopyButtonLabel('Copied!');
    setTimeout(() => setCopyButtonLabel('Copy shades'), 1500);
  };

  return (
    <div
      css={{
        color: getWcagColor(base),
        display: 'flex',
        padding: 12,
        backgroundColor: base,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <div css={{ display: 'flex' }}>
        <Slider
          base={base}
          colors={colors}
          label="Shades"
          max={50}
          set={setShades}
          step={2}
          value={shades}
        />
        <Slider
          base={base}
          colors={colors}
          label="Difference"
          set={setBound}
          value={bound}
        />
      </div>

      <div>
        <input value={colors} id={inputId} />
        <span
          css={{
            padding: 4,
            backgroundColor: colors[0],
            color: getWcagColor(colors[0])
          }}
        >{`Darkest: ${colors[0]}`}</span>{' '}
        <span
          css={{
            padding: 4,
            backgroundColor: colors[colors.length - 1],
            color: getWcagColor(colors[colors.length - 1])
          }}
        >
          {`Lightest: ${colors[colors.length - 1]}`}{' '}
        </span>{' '}
        <Button onClick={onCopy} label={copyButtonLabel} />
        <Button onClick={onDelete} label="Delete" />
      </div>
    </div>
  );
};

const ColorSquare = ({ color }) => (
  <div
    css={{
      display: 'flex',
      width: '100%',
      flex: 1,
      backgroundColor: color
    }}
  />
);

export default ColorSet;
