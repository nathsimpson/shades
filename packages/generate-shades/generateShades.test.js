import { generateShades } from './generateShades';

test(`expects correct Hue for #fa6d01`, () => {
  expect(generateShades('#fa6d01', 13, 40)).toMatchSnapshot();
});
