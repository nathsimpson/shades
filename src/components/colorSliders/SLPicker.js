/** @jsxImportSource @emotion/react */
import { useEffect, useRef } from 'react';
import tinycolor from 'tinycolor2';
import { getContrastColor } from 'hex-a11y';
import { hslMapToHex } from './utils';

export const SLpicker = ({ value, onValueChange }) => {
  const ref = useRef();
  const size = 300;

  /** Derive new hsl values from current mouse position */
  const onChange = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    const input = {
      s: (x / size) * 100 /* A number from 0-100 */,
      v: ((size - y) / size) * 100 /* A number from 0-100 */
    };

    onValueChange({
      // h: value.h,
      s: input.s,
      v: input.v
    });
  };

  useEffect(() => {
    ref.current.addEventListener('mouseup', onChange);
    return () => {
      ref.current.removeEventListener('mouseup', onChange);
    };
  }, [value]);

  return (
    <div
      ref={ref}
      css={{
        width: size,
        height: size,
        position: 'relative',
        background: `linear-gradient(to right, #fff 0%, ${hslMapToHex({
          h: value.h,
          s: 100,
          l: 50
        })} 100%)`
      }}
    >
      <div
        css={{
          width: size,
          height: size,
          background: 'linear-gradient(to bottom, #00000000 0%, #000 100%)'
        }}
      >
        <CrossHair
          color={getContrastColor(tinycolor(value).toHexString())}
          top={size - value.v * size}
          left={value.s * size}
        />
      </div>
    </div>
  );
};

const CrossHair = ({ color, ...props }) => {
  return (
    <div
      css={{
        position: 'absolute',
        ...props,
        height: 10,
        width: 10,
        borderRadius: 10,
        border: '1px solid',
        borderColor: color
      }}
    />
  );
};
