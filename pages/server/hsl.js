import { getRandomNumber } from '../util';



const HSL = () => {
  return {
    type: 'hsl',
    values: [getRandomNumber(360), getRandomNumber(100), getRandomNumber(100)]
  }
}

export default HSL;