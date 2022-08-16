import RGB from "./rgb";
import HSL from './hsl';

const Specs = [
  {
    type: 'rgb',
    getColors: RGB
  },
  {
    type: 'hsl',
    getColors: HSL
  }
]

export default Specs;