import AppRouter from "./routers/AppRouter";
import "./App.css";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses.actions";
import { setTextFilter } from "./actions/filters.actions";
import getVisibleExpenses from "./selectors/expenses.selector";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill" }));
store.dispatch(addExpense({ description: "E bill" }));
store.dispatch(setTextFilter("water"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const app = () => <AppRouter />;

export default app;
