/** @jsxImportSource @emotion/react */
import { Stack } from '../Stack';
import tinycolor from 'tinycolor2';
import { HueSlider } from './HueSlider';
import { SLpicker } from './SLPicker';

export const ColorSliders = ({ value, onChange }) => {
  const currentHSV = tinycolor(value).toHsv(); // {h: 0, s: 0, v:0}

  const onUpdate = (newHSV) => {
    const newValue = tinycolor({ ...currentHSV, ...newHSV }).toHexString();
    onChange(newValue);
  };

  return (
    <Stack>
      <SLpicker value={currentHSV} onValueChange={onUpdate} />
      <HueSlider value={currentHSV} onValueChange={onUpdate} />
    </Stack>
  );
};
