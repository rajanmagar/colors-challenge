export const getRandomNumber = range => Math.floor(Math.random() * (range + 1));

const rgbParser = (values) => `rgb(${values[0]}, ${values[1]}, ${values[2]})`;

const hslParser = (values) => `hsl(${values[0]}, ${values[1]}%, ${values[2]}%)`;

export default {
  hsl: hslParser,
  rgb: rgbParser
}