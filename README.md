# Shades 😎

[Shades](https://shades.nathansimpson.design) is a web application that generates shades of your brand colors.

Simply enter in a hex code of your favourite color, and Shades will generate as many tints of that colour as you like.

## The algorithm

Behind the scenes, Shades converts the input HEX color into HSL syntax, before generating a range of colors based on the brightness difference and the intended amount of shades returned.

The shades are generated in a linear progression, meaning that the 'gaps' between each shade are equal.

> Note that the algorithm filters out any generated colors which are darker than 0 (black) or 255 (white), therefore the algorithm may return less shades than you were expecting.

It's a relatively simple algoritm, but it is definitely not perfect. If you have more advanced needs, I highly recommend ['colorbox.io'](https://colorbox.io).

There is a more detailed description of the algorithm [here](/utils/generateShades/README.md).

## The app

The app is built in React, using create-react-app as a starter.

## Meetup Talk

I gave a talk at the SydJS meetup about how I built Shades. Check it out [on my website](https://nathansimpson.design/talks/manipulate-colour-in-javascript).

## Acknowledgements

Thanks to [Timl](https://twitter.com/timl) for your help with understanding the algorithms involved with generating the shades, and to [simonswiss](https://twitter.com/simonswiss), [Dominik Wilkowski](https://twitter.com/wilkowskidom) and [Thinkmill](https://thinkmill.com.au/) for your support.

## Resources

Here are some handy articles and posts that I referenced while developing this project.

- Math behind colorspace conversions, RGB-HSL http://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
