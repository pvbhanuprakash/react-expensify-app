import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { v4 as uuid } from "uuid";
import "./App.css";
import DashboardComponent from "./Components/ExpenseDashboard";
import AddExpenseComponent from "./Components/AddExpense";
import EditComponent from "./Components/EditExpense";
import HelpComponent from "./Components/HelpPage";
import HeaderComponent from "./Components/Header";
import NotFoundComponent from "./Components/NotFoundPage";

//ADD EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

//SET TEXT FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

//SORT BY AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//SORT BY DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//SET START DATE
const setStartDate = date => ({
  type: "SET_START_DATE",
  date
});

//SET END DATE
const setEndDate = date => ({
  type: "SET_END_DATE",
  date
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else return expense;
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SET_START_DATE":
      return { ...state, startDate: action.date };
    case "SET_END_DATE":
      return { ...state, endDate: action.date };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;
      else if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    });
};

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filtersReducer })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 2000, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "ebill", amount: 500, createdAt: 1000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 700 }));

// store.dispatch(setTextFilter("bill"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(321));

const demoState = {
  expenses: [
    {
      id: "",
      description: "",
      note: "",
      amount: "",
      createdAt: ""
    }
  ],
  filters: {
    text: "",
    sortBy: "",
    startDate: "",
    endDate: ""
  }
};

const routes = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderComponent />
        <Switch>
          <Route path="/" component={DashboardComponent} exact={true} />
          <Route path="/create" component={AddExpenseComponent} />
          <Route path="/edit/:id" component={EditComponent} />
          <Route path="/help" component={HelpComponent} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default routes;
