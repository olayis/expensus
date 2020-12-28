import numeral from 'numeral';

export default () => {
  // load a locale
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
    ordinal: (number) => (number === 1 ? 'er' : 'ème'),
    currency: {
      symbol: '₦',
    },
  });

  // switch between locales
  return numeral.locale('ng');
};
