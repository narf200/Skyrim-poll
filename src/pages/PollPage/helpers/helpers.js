const getCalculationCharacter = (counter) => {
  let character = {};
  if (counter >= 6) {
    character = {
      name: 'Assasin',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.g7Q0tmp4NlhlbdoWj5ebPwHaHa%26pid%3DApi&f=1&ipt=8b16ab764ab9ae5844a1ef88633ec1463f208d62b3068fc0e9ba682c29a2c36c&ipo=images',
    };
  } else if (counter >= 1 && counter <= 6) {
    character = {
      name: 'Wizard',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.RZMGGl4Yhpgvz44jUixJlgHaKz%26pid%3DApi&f=1&ipt=cedcdc988eea528d0ac2738d53209062fe5599650d51acba650b2f36123db121&ipo=images',
    };
  } else if (counter <= -5 && counter >= -10) {
    character = {
      name: 'Seller',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7beE9LEaSBEoRBiTE5tOsAHaKe%26pid%3DApi&f=1&ipt=697fc0e23dce42940b4068db3969b77b4b3b214b27392052890d3ed54204a211&ipo=images',
    };
  } else if (counter <= -11 && counter === 0) {
    character = {
      name: 'Funny cat',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tE02XcxrmA9P2_uKBIc4DgHaJ4%26pid%3DApi&f=1&ipt=bb87ceb201f764fd8de594c534d7d4a3481de9bacbcd9c92819a4a3e02e39713&ipo=images',
    };
  }
  return character;
};

export default getCalculationCharacter;
