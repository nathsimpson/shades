const { arrayToPalette } = require('./index');

test(`expects pallete JSON to be generated for 11 colors`, () => {
  expect(
    arrayToPalette([
      { lightness: 50, value: '#040703' },
      { lightness: 100, value: '#182c11' },
      { lightness: 200, value: '#2a4e1d' },
      { lightness: 300, value: '#3d732b' },
      { lightness: 400, value: '#4f9438' },
      { lightness: 500, value: '#63b946' },
      { lightness: 600, value: '#82c76b' },
      { lightness: 700, value: '#9ed48c' },
      { lightness: 800, value: '#bde2b1' },
      { lightness: 900, value: '#daeed3' }
    ])
  ).toStrictEqual({
    50: '#040703',
    100: '#182c11',
    200: '#2a4e1d',
    300: '#3d732b',
    400: '#4f9438',
    500: '#63b946',
    600: '#82c76b',
    700: '#9ed48c',
    800: '#bde2b1',
    900: '#daeed3'
  });
});
