import numeral from 'numeral';
import { naira } from '../../configurations/numeralLocale';

test('should change currency from dollars to Naira', () => {
    naira();
    const convertedCurrency = numeral(1000).format('$0,0.00');

    expect(convertedCurrency).toBe('₦1,000.00');
});