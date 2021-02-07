//SET TEXT FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT BY AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SORT BY DATE
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SET START DATE
export const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});

//SET END DATE
export const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});
