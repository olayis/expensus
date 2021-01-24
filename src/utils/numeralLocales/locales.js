// Acknowledgement: numeral locale configurations were gotten from https://github.com/adamwdraper/Numeral-js

import numeral from 'numeral';

export default (locale) => {
  switch (locale) {
    case 'Baht':
      // Thai Baht
      numeral.register('locale', 'th', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: 'พัน',
          million: 'ล้าน',
          billion: 'พันล้าน',
          trillion: 'ล้านล้าน',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: '฿',
        },
      });
      return numeral.locale('th');

    case 'Danish Krone':
      // Danish Denmark Krone
      numeral.register('locale', 'da-dk', {
        delimiters: {
          thousands: '.',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'mio',
          billion: 'mia',
          trillion: 'b',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: 'DKK',
        },
      });
      return numeral.locale('da-dk');

    case 'Dollar':
      return numeral.locale('en');

    case 'Euro':
      numeral.register('locale', 'de', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: '€',
        },
      });
      return numeral.locale('de');

    case 'Dong':
      // Vietnamese Dong
      numeral.register('locale', 'vi', {
        delimiters: {
          thousands: '.',
          decimal: ',',
        },
        abbreviations: {
          thousand: ' nghìn',
          million: ' triệu',
          billion: ' tỷ',
          trillion: ' nghìn tỷ',
        },
        ordinal: () => '.',
        currency: {
          symbol: '₫',
        },
      });
      return numeral.locale('vi');

    case 'Forint':
      // Hungarian Forint
      numeral.register('locale', 'hu', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'E', // ezer
          million: 'M', // millió
          billion: 'Mrd', // milliárd
          trillion: 'T', // trillió
        },
        ordinal: (number) => '.',
        currency: {
          symbol: ' Ft',
        },
      });
      return numeral.locale('hu');

    case 'Hryvnia':
      // Ukrainian Hryvnia
      numeral.register('locale', 'uk-ua', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'тис.',
          million: 'млн',
          billion: 'млрд',
          trillion: 'блн',
        },
        ordinal: () => {
          /* not ideal, but since in Ukrainian it can take on
           ** different forms (masculine, feminine, neuter)
           ** this is all we can do
           ** return '';
           */
        },
        currency: {
          symbol: '\u20B4',
        },
      });
      return numeral.locale('uk-ua');

    case 'Koruna':
      // Czech Koruna
      numeral.register('locale', 'cs', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'tis.',
          million: 'mil.',
          billion: 'b',
          trillion: 't',
        },
        ordinal: () => '.',
        currency: {
          symbol: 'Kč',
        },
      });
      return numeral.locale('cs');

    case 'Lira':
      // Turkish Lira
      const suffixes = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",

        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",

        3: "'üncü",
        4: "'üncü",
        100: "'üncü",

        6: "'ncı",

        9: "'uncu",
        10: "'uncu",
        30: "'uncu",

        60: "'ıncı",
        90: "'ıncı",
      };

      numeral.register('locale', 'tr', {
        delimiters: {
          thousands: '.',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'bin',
          million: 'milyon',
          billion: 'milyar',
          trillion: 'trilyon',
        },
        ordinal: (number) => {
          if (number === 0) {
            // special case for zero
            return "'ıncı";
          }

          const a = number % 10,
            b = (number % 100) - a,
            c = number >= 100 ? 100 : null;

          return suffixes[a] || suffixes[b] || suffixes[c];
        },
        currency: {
          symbol: '\u20BA',
        },
      });
      return numeral.locale('tr');

    case 'Lev':
      // Bulgarian Lev
      numeral.register('locale', 'bg', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          // I found these here http://www.unicode.org/cldr/charts/28/verify/numbers/bg.html
          thousand: 'хил',
          million: 'млн',
          billion: 'млрд',
          trillion: 'трлн',
        },
        ordinal: (number) => {
          // google translate suggests:
          // 1st=1-ви; 2nd=2-ри; 7th=7-ми;
          // 8th=8-ми and many others end with -ти
          // for example 3rd=3-ти
          // However since I've seen suggestions that in
          // Bulgarian the ordinal can be taken in
          // different forms (masculine, feminine, neuter)
          // I've opted to wimp out on commiting that to code
          return '';
        },
        currency: {
          symbol: 'лв',
        },
      });
      return numeral.locale('bg');

    case 'Naira':
      // Nigerian Naira
      numeral.register('locale', 'ng', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: () => {
          const b = number % 10;
          return ~~((number % 100) / 10) === 1
            ? 'th'
            : b === 1
            ? 'st'
            : b === 2
            ? 'nd'
            : b === 3
            ? 'rd'
            : 'th';
        },
        currency: {
          symbol: '₦',
        },
      });
      return numeral.locale('ng');

    case 'Norwegian krone':
      numeral.register('locale', 'no', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: 'kr',
        },
      });
      return numeral.locale('no');

    case 'Pound Sterling':
      // locale: United Kingdom
      numeral.register('locale', 'en-gb', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: (number) => {
          const b = number % 10;
          return ~~((number % 100) / 10) === 1
            ? 'th'
            : b === 1
            ? 'st'
            : b === 2
            ? 'nd'
            : b === 3
            ? 'rd'
            : 'th';
        },
        currency: {
          symbol: '£',
        },
      });
      return numeral.locale('en-gb');

    case 'Rand':
      // South Africa Rand
      numeral.register('locale', 'en-za', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: () => {
          const b = number % 10;
          return ~~((number % 100) / 10) === 1
            ? 'th'
            : b === 1
            ? 'st'
            : b === 2
            ? 'nd'
            : b === 3
            ? 'rd'
            : 'th';
        },
        currency: {
          symbol: 'R',
        },
      });
      return numeral.locale('en-za');

    case 'Real':
      // Brazilian Real
      numeral.register('locale', 'pt-br', {
        delimiters: {
          thousands: '.',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'mil',
          million: 'milhões',
          billion: 'b',
          trillion: 't',
        },
        ordinal: (number) => 'º',
        currency: {
          symbol: 'R$',
        },
      });
      return numeral.locale('pt-br');

    case 'Ruble':
      // Russian Ruble
      numeral.register('locale', 'ru', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'тыс.',
          million: 'млн.',
          billion: 'млрд.',
          trillion: 'трлн.',
        },
        ordinal: () => {
          // not ideal, but since in Russian it can taken on
          // different forms (masculine, feminine, neuter)
          // this is all we can do
          return '.';
        },
        currency: {
          symbol: '₽',
        },
      });
      return numeral.locale('ru');

    case 'Swiss Franc':
      // German in Switzerland
      numeral.register('locale', 'de-ch', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'k',
          million: 'm',
          billion: 'b',
          trillion: 't',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: 'CHF',
        },
      });
      return numeral.locale('de-ch');

    case 'Yen':
      // Japanese Yen
      numeral.register('locale', 'ja', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: '千',
          million: '百万',
          billion: '十億',
          trillion: '兆',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: '¥',
        },
      });
      return numeral.locale('ja');

    case 'Yuan':
      // Simplified Chinese Yuan
      numeral.register('locale', 'chs', {
        delimiters: {
          thousands: ',',
          decimal: '.',
        },
        abbreviations: {
          thousand: '千',
          million: '百万',
          billion: '十亿',
          trillion: '兆',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: '¥',
        },
      });
      return numeral.locale('chs');

    case 'Zloty':
      // Polish Złoty
      numeral.register('locale', 'pl', {
        delimiters: {
          thousands: ' ',
          decimal: ',',
        },
        abbreviations: {
          thousand: 'tys.',
          million: 'mln',
          billion: 'mld',
          trillion: 'bln',
        },
        ordinal: (number) => '.',
        currency: {
          symbol: 'PLN',
        },
      });
      return numeral.locale('pl');

    default:
      return numeral.locale('en');
  }
};
