import { ASSASIN, CATFUNNY, SELLER, WIZARD } from '../constants/constants';

const getCalculationCharacter = (counter) => {
  let character = '';
  if (counter >= 6) {
    character = ASSASIN;
  } else if (counter >= 1 && counter <= 6) {
    character = WIZARD;
  } else if (counter <= -5 && counter >= -10) {
    character = SELLER;
  } else if (counter <= -11) {
    character = CATFUNNY;
  }
  return character;
};

export default getCalculationCharacter;
