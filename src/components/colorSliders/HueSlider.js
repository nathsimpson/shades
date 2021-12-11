/** @jsxImportSource @emotion/react */

export const HueSlider = ({ value, onValueChange }) => {
  return (
    <input
      type="range"
      name="hue"
      min={0}
      max={360}
      value={value.h}
      onChange={(e) => onValueChange({ h: parseInt(e.target.value) })}
      css={{
        WebkitAppearance: 'none',
        appearance: 'none',
        width: '100%',
        height: 15,
        // borderRadius: 5,
        // backgroundColor: 'red',
        background:
          'linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)',
        backgroundOpacity: 0.1,
        outline: 'none',
        WebkitTransition: '0.2s',
        transition: 'opacity 0.2s',

        '::-webkit-slider-thumb': {
          WebkitAppearance: 'none',
          appearance: 'none',
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: '#fff',
          cursor: 'pointer'
        },

        '::-moz-range-thumb': {
          width: 25,
          height: 25,
          borderRadius: '50%',
          background: '#fff',
          cursor: 'pointer'
        }
      }}
    />
  );
};
