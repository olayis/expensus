import numeral from 'numeral';
import configureNumeralLocale from '../../../utils/numeralLocales/locales';

test('should change currency to Baht(฿)', () => {
  const numeralConfig = configureNumeralLocale('Baht');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('฿1,000.00');
});

test('should change currency to Danish Krone(DKK)', () => {
  const numeralConfig = configureNumeralLocale('Danish Krone');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('DKK1.000,00');
});

test('should change currency to Dollar($)', () => {
  const numeralConfig = configureNumeralLocale('Dollar');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('$1,000.00');
});

test('should change currency to Euro(€)', () => {
  const numeralConfig = configureNumeralLocale('Euro');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('€1,000.00');
});

test('should change currency to Dong(₫)', () => {
  const numeralConfig = configureNumeralLocale('Dong');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₫1.000,00');
});

test('should change currency to Forint(Ft)', () => {
  const numeralConfig = configureNumeralLocale('Forint');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('Ft1 000,00');
});

test('should change currency to Hryvnia(\u20B4)', () => {
  const numeralConfig = configureNumeralLocale('Hryvnia');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('\u20B41 000,00');
});

test('should change currency to Koruna(Kč)', () => {
  const numeralConfig = configureNumeralLocale('Koruna');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('Kč1 000,00');
});

test('should change currency to Lira(\u20BA)', () => {
  const numeralConfig = configureNumeralLocale('Lira');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('\u20BA1.000,00');
});

test('should change currency to Lev(лв)', () => {
  const numeralConfig = configureNumeralLocale('Lev');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('лв1 000,00');
});

test('should change currency to Naira(₦)', () => {
  const numeralConfig = configureNumeralLocale('Naira');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₦1,000.00');
});

test('should change currency to Norwegian krone(kr)', () => {
  const numeralConfig = configureNumeralLocale('Norwegian krone');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('kr1 000,00');
});

test('should change currency to Rand(R)', () => {
  const numeralConfig = configureNumeralLocale('Rand');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('R1 000,00');
});

test('should change currency to Real(R$)', () => {
  const numeralConfig = configureNumeralLocale('Real');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('R$1.000,00');
});

test('should change currency to Ruble(₽)', () => {
  const numeralConfig = configureNumeralLocale('Ruble');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₽1 000,00');
});

test('should change currency to Swiss Franc(CHF)', () => {
  const numeralConfig = configureNumeralLocale('Swiss Franc');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('CHF1 000,00');
});

test('should change currency to Yen(¥)', () => {
  const numeralConfig = configureNumeralLocale('Yen');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('¥1,000.00');
});

test('should change currency to Yuan(¥)', () => {
  const numeralConfig = configureNumeralLocale('Yuan');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('¥1,000.00');
});

test('should change currency to Zloty(PLN)', () => {
  const numeralConfig = configureNumeralLocale('Zloty');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('PLN1 000,00');
});

test('should change currency to USD($) by default', () => {
  const numeralConfig = configureNumeralLocale('Currency does not exist');
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('$1,000.00');
});
