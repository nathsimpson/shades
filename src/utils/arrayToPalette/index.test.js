const { arrayToPalette } = require('./index');

test(`expects pallete to work for first item`, () => {
  expect(
    arrayToPalette([
      '#040703',
      '#182c11',
      '#2a4e1d',
      '#3d732b',
      '#4f9438',
      '#63b946',
      '#82c76b',
      '#9ed48c',
      '#bde2b1',
      '#daeed3',
      '#f9fcf8'
    ])
  ).toStrictEqual({
    100: '#040703',
    1000: '#daeed3',
    1100: '#f9fcf8',
    200: '#182c11',
    300: '#2a4e1d',
    400: '#3d732b',
    500: '#4f9438',
    600: '#63b946',
    700: '#82c76b',
    800: '#9ed48c',
    900: '#bde2b1'
  });
});
