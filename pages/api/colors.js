import Specs from '../server';

const generator = (maxColor = 5) => {
  const colors = [];
  const totalColors = Specs.length;
  while (colors.length < maxColor) {
    const randomIndex = Math.floor(Math.random() * totalColors);
    const color = Specs[randomIndex];
    if (color.getColors) {
      colors.push(color.getColors())
    }
  }
  return colors;
}

export default function generateColors(req, res) {
  const colors = generator();;
  res.status(200).json(colors);
}