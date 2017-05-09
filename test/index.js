import {describe, it} from 'mocha';
import {expect} from 'chai';
import {codes, byAlpha2, byAlpha3, byNumeric} from '../lib';


describe('iso-country-codes', () => {
  it('is valid', () => {
    const countryMap = Object.create(null);
    const alpha2Map = Object.create(null);
    const alpha3Map = Object.create(null);
    const numericMap = Object.create(null);

    expect(codes.length).to.equal(249);
    expect(Object.keys(byAlpha2).length).to.equal(249);
    expect(Object.keys(byAlpha3).length).to.equal(249);
    expect(Object.keys(byNumeric).length).to.equal(249);

    codes.forEach((code) => {
      const {name, altName, shortName, alpha2, alpha3, numeric} = code;

      expect(code).to.equal(byAlpha2[alpha2]);
      expect(code).to.equal(byAlpha3[alpha3]);
      expect(code).to.equal(byNumeric[numeric]);

      expect(name.trim()).to.equal(name);
      expect(altName && altName.trim()).to.equal(altName);
      expect(shortName && shortName.trim()).to.equal(shortName);
      expect(name).to.not.equal(altName);
      expect(name).to.not.equal(shortName);
      expect(name.length > 0).to.be.true;

      expect(alpha2).to.match(/^[A-Z]{2}$/);
      expect(alpha3).to.match(/^[A-Z]{3}$/);
      expect(numeric).to.match(/^[0-9]{3}$/);

      // test uniqueness
      expect(name in countryMap).to.be.false;
      countryMap[name] = true;

      expect(alpha2 in alpha2Map).to.be.false;
      alpha2Map[alpha2] = true;

      expect(alpha3 in alpha3Map).to.be.false;
      alpha3Map[alpha3] = true;

      expect(numeric in numericMap).to.be.false;
      numericMap[numeric] = true;
    });

    console.log(JSON.stringify(codes, null, '  '));
  });
});
