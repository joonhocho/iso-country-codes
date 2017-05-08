# iso-country-codes
[![Build Status](https://travis-ci.org/joonhocho/iso-country-codes.svg?branch=master)](https://travis-ci.org/joonhocho/iso-country-codes)
[![Coverage Status](https://coveralls.io/repos/github/joonhocho/iso-country-codes/badge.svg?branch=master)](https://coveralls.io/github/joonhocho/iso-country-codes?branch=master)
[![npm version](https://badge.fury.io/js/iso-country-codes.svg)](https://badge.fury.io/js/iso-country-codes)
[![Dependency Status](https://david-dm.org/joonhocho/iso-country-codes.svg)](https://david-dm.org/joonhocho/iso-country-codes)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)


ISO Country Codes including Alpha-2, Alpha-3, and numeric codes

Data is from [iso.org](https://www.iso.org/obp/ui/#search/code/).


### Install
```
npm install --save iso-country-codes
```


### Usage
```javascript
import {
  codes,
  byAlpha2,
  byAlpha3,
  byNumeric,
} from 'iso-country-codes';

// codes with the following format:
[
  {
    name: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
  },
  {
    name: 'Åland Islands',
    alpha2: 'AX',
    alpha3: 'ALA',
    numeric: '248',
  },
  ...
]

// byAlpha2 with the following format:
{
  AF: {
    name: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
  },
  ...
}

// byAlpha3 with the following format:
{
  AFG: {
    name: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
  },
  ...
}

// byNumeric with the following format:
{
  004: {
    name: 'Afghanistan',
    alpha2: 'AF',
    alpha3: 'AFG',
    numeric: '004',
  },
  ...
}
```


### License
```
The MIT License (MIT)

Copyright (c) 2016 Joon Ho Cho

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
