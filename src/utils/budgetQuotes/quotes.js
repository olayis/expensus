const quotes = [
  {
    quote:
      "Don't tell me what you value, show me your budget, and I'll tell you what you value.",
    author: 'Joe Biden',
  },
  {
    quote:
      'Too many people spend money they haven’t earned, to buy things they don’t want, to impress people that they don’t like.',
    author: 'Will Rogers',
  },
  {
    quote:
      'The slightest adjustments to your daily routines can dramatically alter the outcomes in your life.',
    author: 'Darren Hardy',
  },
  {
    quote:
      "We didn't actually overspend our budget. The allocation simply fell short of our expenditure.",
    author: 'Keith Davis',
  },
  {
    quote:
      'A budget is more than just a series of numbers on a page; it is an embodiment of our values.',
    author: 'Barack Obama',
  },
  {
    quote: 'A budget takes the fun out of money.',
    author: 'Mason Cooley',
  },
  {
    quote:
      'A budget is telling your money where to go instead of wondering where it went.',
    author: 'Dave Ramsey',
  },
  {
    quote:
      "A budget tells us what we can't afford, but it doesn't keep us from buying it.",
    author: 'William Feather',
  },
  {
    quote: 'Manage your spending by creating and sticking to a budget.',
    author: 'Alexa Von Tobel',
  },
  {
    quote: "Just because you can afford it doesn't mean you should buy it.",
    author: 'Suze Orman',
  },
  {
    quote: 'Doing a budget means learning an ancient and powerful word: NO.',
    author: 'Dave Ramsey',
  },
  {
    quote: 'Budgets are nothing if not statements of priorities.',
    author: 'Jeff Merkley',
  },
  {
    quote: "They call it a budget so you don't budge from it.",
    author: 'Mike Figgis',
  },
  {
    quote:
      'Budgeting, when used effectively, is a technique resulting in synthetic, productive management.',
    author: 'Jae K. Shim',
  },
  {
    quote:
      'A budget is defined as the formal expression of plans, goals, and objectives of management that covers all aspects of operations for a designated time period.',
    author: 'Jae K. Shim',
  },
  {
    quote:
      'With an understanding of your budget and your true needs, you may start putting away more money than you ever expected.',
    author: 'Larry Dyson',
  },
  {
    quote:
      'Sometimes the best way to start saving money is simply to become more aware of your finances and spending habits.',
    author: 'Larry Dyson',
  },
  {
    quote: "Used correctly, a budget doesn't restrict you; it empowers you.",
    author: 'Tere Stouffer',
  },
  {
    quote:
      "Creating a budget isn't easy, but sticking to any budget is extremely difficult. The trick is to focus on the word realistic",
    author: 'Tere Stouffer',
  },
  {
    quote:
      'Being in control of your money means being in control of your life.',
    author: 'Sam Beckbessinger',
  },
  {
    quote:
      'Personal finance management is gaining an understanding of your finances, so you get to make the most out of your assets in your day-to-day experiences.',
    author: 'Jason Ramsey',
  },
  {
    quote:
      'A good budget is the foundation of all your financial well being and will be the difference between staying on track with your goals or not.',
    author: 'Lisa Conway-Hughes',
  },
  {
    quote:
      'The secret to budgeting is that it needs to be honest. Not what you think it should be or wish it could be, but what it really is.',
    author: 'Lisa Conway-Hughes',
  },
  {
    quote: 'A debt problem is, at its core, a budgeting problem.',
    author: 'Natalie Pace',
  },
  {
    quote: 'Budgeting has only one rule: Do not go over budget.',
    author: 'Leslie Tayne',
  },
  {
    quote: "It isn't what you earn but how you spend it that fixes your class.",
    author: 'Sinclair Lewis',
  },
  {
    quote:
      'Budgeting is not just for people who do not have enough money. It is for everyone who wants to ensure that their money is enough.',
    author: 'Rosette Mugidde Wamambe',
  },
  {
    quote:
      "The simplest definition of a budget is 'telling your money where to go.'",
    author: 'Tsh Oxenreider',
  },
  {
    quote:
      'Do not save what is left after spending, but spend what is left after saving.',
    author: 'Warren Buffett',
  },
];

export default () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
};
