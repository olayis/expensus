import randomQuote from '../../../utils/budgetQuotes/quotes';

test('should return a random quote and author from quotes', () => {
  const quotes = randomQuote();
  expect(quotes.quote.length).toBeGreaterThan(0);
  expect(quotes.author.length).toBeGreaterThan(0);
});
