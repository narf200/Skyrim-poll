import {
  ASSASIN,
  BARD,
  BLACK_MAMBA,
  HUNTER,
  PAWNBROKER,
  SELLER,
  WIZARD,
} from '../constants/constants';

const getCalculationCharacter = (counter) => {
  let character = {};
  if (counter >= 9) {
    character = {
      name: 'Black mamba',
      url: BLACK_MAMBA,
    };
  } else if (counter <= 8 && counter >= 5) {
    character = {
      name: 'Assasin',
      url: ASSASIN,
    };
  } else if (counter <= 4 && counter >= 1) {
    character = {
      name: 'Hunter',
      url: HUNTER,
    };
  } else if (counter <= -1 && counter >= -3) {
    character = {
      name: 'Pawnbroker',
      url: PAWNBROKER,
    };
  } else if (counter <= -4 && counter >= -7) {
    character = {
      name: 'Wizard',
      url: WIZARD,
    };
  } else if (counter <= -8 && counter >= -11) {
    character = {
      name: 'Seller',
      url: SELLER,
    };
  } else if (counter === 0 || counter === -12) {
    character = {
      name: 'Bard',
      url: BARD,
    };
  }
  return character;
};

export default getCalculationCharacter;
