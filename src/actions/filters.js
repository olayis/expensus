// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

// SORT_BY_DATE_RECENT
export const sortByDateRecent = () => ({
  type: 'SORT_BY_DATE_RECENT',
});

// SORT_BY_DATE_OLDEST
export const sortByDateOldest = () => ({
  type: 'SORT_BY_DATE_OLDEST',
});

// SORT_BY_AMOUNT_HIGHEST
export const sortByAmountHighest = () => ({
  type: 'SORT_BY_AMOUNT_HIGHEST',
});

// SORT_BY_AMOUNT_LOWEST
export const sortByAmountLowest = () => ({
  type: 'SORT_BY_AMOUNT_LOWEST',
});

// SORT_BY_DESCRIPTION_A_TO_Z
export const sortByDescriptionAtoZ = () => ({
  type: 'SORT_BY_DESCRIPTION_A_TO_Z',
});

// SORT_BY_DESCRIPTION_Z_TO_A
export const sortByDescriptionZtoA = () => ({
  type: 'SORT_BY_DESCRIPTION_Z_TO_A',
});

// SORT_BY_CATEGORY
export const sortByCategory = () => ({
  type: 'SORT_BY_CATEGORY',
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});
