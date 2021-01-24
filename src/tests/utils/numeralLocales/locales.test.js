import numeral from 'numeral';
import configureNumeralLocale from '../../../utils/numeralLocales/locales';

test('should change currency from USD($) to Naira(₦)', () => {
  const ngNumeral = configureNumeralLocale('Naira');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₦1,000.00');
});
