import numeral from 'numeral';
import '../../../utils/numeralLocales/ngLocale';

test('should change currency from USD($) to Naira(₦)', () => {
    const convertedCurrency = numeral(1000).format('$0,0.00');
    expect(convertedCurrency).toBe('₦1,000.00');
});