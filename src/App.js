import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
// import { addExpense } from "./actions/expenses.actions";
import getVisibleExpenses from "./selectors/expenses.selector";
import "./App.css";
import "react-dates/lib/css/_datepicker.css";
import { startSetExpenses } from "./actions/expenses.actions";

const store = configureStore();

// store.dispatch(
//   addExpense({
//     description: "Water bill",
//     amount: 500,
//     createdAt: 1602802650000
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "electricity bill",
//     amount: 200,
//     createdAt: 1613802500000
//   })
// );
// store.dispatch(
//   addExpense({
//     description: "rent bill",
//     amount: 2000,
//     createdAt: 1613005464214
//   })
// );

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

store.dispatch(startSetExpenses());

const app = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default app;
