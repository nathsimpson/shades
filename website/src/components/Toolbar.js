/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import Slider from './slider';
import { Button } from './button';
import { Stack } from './Stack';
import { arrayToPalette } from '@nathsimpson/generate-shades/lib/arrayToPalette';

export const ToolBar = ({
  base,
  colors,
  numberOfShades,
  setNumberOfShades,
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
        display: 'flex',
        width: 200,
        padding: 16,
        flexDirection: 'column'
      }}
    >
      <Stack gap="medium">
        <div
          css={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <span
            css={{
              color: base,
              fontSize: '2em',
              fontWeight: 800,
              marginLeft: 8
            }}
          >
            {base}
          </span>
        </div>
        <Slider
          base={base}
          colors={colors}
          label="Shades"
          max={50}
          set={setNumberOfShades}
          step={2}
          value={numberOfShades}
        />
        <Slider
          base={base}
          colors={colors}
          label="Difference"
          set={setBound}
          value={bound}
        />
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
          color={base}
        />
        <Button onClick={onDelete} label="Delete" color={base} />
      </Stack>
    </div>
  );
};
