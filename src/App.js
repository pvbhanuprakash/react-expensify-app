import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses.actions";
import getVisibleExpenses from "./selectors/expenses.selector";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
store.dispatch(
  addExpense({ description: "electricity bill", amount: 200, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "rent bill", amount: 5000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const app = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default app;
