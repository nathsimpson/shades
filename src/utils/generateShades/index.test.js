const { generateShades } = require('./index');

test(`expects correct Hue for ${name}`, () => {
  expect(generateShades('#fa6d01', 13, 40)).toMatchSnapshot();
});
