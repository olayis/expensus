import numeral from 'numeral';
import selectLocale from '../../selectors/locale';

test('should change currency to Baht(฿)', () => {
  const numeralConfig = selectLocale('Baht');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('฿1,000.00');
});

test('should change currency to Danish Krone(DKK)', () => {
  const numeralConfig = selectLocale('Danish Krone');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('DKK1.000,00');
});

test('should change currency to Dollar($)', () => {
  const numeralConfig = selectLocale('Dollar');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('$1,000.00');
});

test('should change currency to Dong(₫)', () => {
  const numeralConfig = selectLocale('Dong');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₫1.000,00');
});

test('should change currency to Euro(€)', () => {
  const numeralConfig = selectLocale('Euro');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('€1,000.00');
});

test('should change currency to Forint(Ft)', () => {
  const numeralConfig = selectLocale('Forint');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('Ft1 000,00');
});

test('should change currency to Hryvnia(\u20B4)', () => {
  const numeralConfig = selectLocale('Hryvnia');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('\u20B41 000,00');
});

test('should change currency to Koruna(Kč)', () => {
  const numeralConfig = selectLocale('Koruna');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('Kč1 000,00');
});

test('should change currency to Lira(\u20BA)', () => {
  const numeralConfig = selectLocale('Lira');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('\u20BA1.000,00');
});

test('should change currency to Lev(лв)', () => {
  const numeralConfig = selectLocale('Lev');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('лв1 000,00');
});

test('should change currency to Naira(₦)', () => {
  const numeralConfig = selectLocale('Naira');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₦1,000.00');
});

test('should change currency to Norwegian krone(kr)', () => {
  const numeralConfig = selectLocale('Norwegian krone');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('kr1 000,00');
});

test('should change currency to Rand(R)', () => {
  const numeralConfig = selectLocale('Rand');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('R1 000,00');
});

test('should change currency to Real(R$)', () => {
  const numeralConfig = selectLocale('Real');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('R$1.000,00');
});

test('should change currency to Ruble(₽)', () => {
  const numeralConfig = selectLocale('Ruble');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('₽1 000,00');
});

test('should change currency to Swiss Franc(CHF)', () => {
  const numeralConfig = selectLocale('Swiss Franc');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('CHF1 000,00');
});

test('should change currency to Yen(¥)', () => {
  const numeralConfig = selectLocale('Yen');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('¥1,000.00');
});

test('should change currency to Yuan(¥)', () => {
  const numeralConfig = selectLocale('Yuan');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('¥1,000.00');
});

test('should change currency to Zloty(PLN)', () => {
  const numeralConfig = selectLocale('Zloty');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('PLN1 000,00');
});

test('should change currency to USD($) by default', () => {
  const numeralConfig = selectLocale('Currency does not exist');
  numeral.locale(numeralConfig);
  const convertedCurrency = numeral(1000).format('$0,0.00');
  expect(convertedCurrency).toBe('$1,000.00');
});
