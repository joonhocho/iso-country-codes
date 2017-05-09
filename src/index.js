// https://www.iso.org/obp/ui/#search/code/
// http://www.nationsonline.org/oneworld/country_code_list.htm
import codes from './data';

const byAlpha2 = Object.create(null);
const byAlpha3 = Object.create(null);
const byNumeric = Object.create(null);

for (let i = 0, il = codes.length; i < il; i++) {
  const code = codes[i];
  const {alpha2, alpha3, numeric} = code;
  byAlpha2[alpha2] = code;
  byAlpha3[alpha3] = code;
  byNumeric[numeric] = code;
}


export {
  codes,
  byAlpha2,
  byAlpha3,
  byNumeric,
};

export default {
  codes,
  byAlpha2,
  byAlpha3,
  byNumeric,
};
