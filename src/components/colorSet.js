/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';
import { useState } from 'react';
import Slider from './slider';
import { Button } from './button';
import { generateShades } from '../utils/generateShades';
import { getWcagColor } from '../utils/getWcagColor';
import { arrayToPalette } from '../utils/arrayToPalette';

const ColorSet = ({ base, onRemoveColor, colors: rootColors }) => {
  const [shades, setShades] = useState(6);
  const [bound, setBound] = useState(30);

  const colors = generateShades(base, shades, bound);

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
          overflow: 'scroll',
          alignItems: 'stretch'
        }}
      >
        {colors.map((shade) => (
          <ColorSquare color={shade} key={shade} />
        ))}
      </div>
      <ToolBar
        onDelete={onRemoveColor}
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
  const copyButtonLabel = `Copy ${colors.length} shades`;
  const inputId = `text-${base}`;

  const [isCopied, setCopied] = useState(false);

  const onCopy = () => {
    const copyText = document.getElementById(inputId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      css={{
        color: getWcagColor(base),
        display: 'flex',
        padding: 8,
        backgroundColor: base,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      <div css={{ display: 'flex', alignItems: 'center' }}>
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
        <input
          css={{
            backgroundColor: base,
            border: 'none',
            height: 1,
            outline: 0,
            width: 1
          }}
          value={JSON.stringify(arrayToPalette(colors))}
          onChange={() => {}}
          id={inputId}
        />

        <Button
          onClick={onCopy}
          label={isCopied ? 'Copied!' : copyButtonLabel}
          color={colors[0]}
        />
        <Button onClick={onDelete} label="Delete" color={colors[0]} />
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
      padding: 16,
      color: getWcagColor(color),
      backgroundColor: color
    }}
  >
    {color}
  </div>
);

export default ColorSet;
