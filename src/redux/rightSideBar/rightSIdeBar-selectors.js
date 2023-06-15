export const rightSidebarSelectors = {
  selectCaloricityPerDay: state => state.day.daySummary?.caloricityPerDay || 0,
  selectDate: state => state.day.date,
};