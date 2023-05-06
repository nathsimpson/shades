## generateShades

This function is the primary logic of Shades. From a base input color, it generates a range of colors based on the brightness difference and the intended amount of shades returned.

The algorithm uses three variables..

- `base`, the base color in HSL syntax
- `shades`, the amount of colors you would like returned
- `difference`, the amount of difference in brightness between the base color and the lightest/darkest shades.

The variables are used to generate the `delta` (gap between each shade), then the darkest shade. Each 'shade' is then generated by adding the delta to the previous shade.

The shades are generated in a linear progression, meaning that the 'gaps' between each shade are equal.

> Note that the algorithm filters out any generated colors which are darker than 0 (black) or 255 (white), therefore the algorithm may return less shades than you were expecting.

It's a relatively simple algoritm, but it is definitely not perfect. If you have more advanced needs, I highly recommend ['colorbox.io'](https://colorbox.io).

If you are interested in learning more about the algorithms involved in making Shades, I gave a talk at the SydJS meetup about it, which you can watch [on my website](https://nathansimpson.design/talks/manipulate-colour-in-javascript).