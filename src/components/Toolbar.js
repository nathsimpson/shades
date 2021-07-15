/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState } from 'react';
import Slider from './slider';
import { Button } from './button';
import { Stack } from './Stack';
import { arrayToPalette } from '../utils/arrayToPalette';

export const ToolBar = ({
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
        display: 'flex',
        width: 200,
        // flex: 1,
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
          <div
            css={{
              backgroundColor: base,
              height: 32,
              width: 32
            }}
          />

          <span css={{ marginLeft: 8 }}>{base}</span>
        </div>
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
