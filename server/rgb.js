import { getRandomNumber } from '../util';

const RGB = () => {
  return {
    type: 'rgb',
    values: [getRandomNumber(255), getRandomNumber(255), getRandomNumber(255)]
  }
}

export default RGB;