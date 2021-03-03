import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth.actions";
// import getVisibleExpenses from "./selectors/expenses.selector";
import "./App.css";
import "react-dates/lib/css/_datepicker.css";
import { startSetExpenses } from "./actions/expenses.actions";
import { firebase } from "./firebase/firebase";

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

const app = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("Logged in", user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      if (history.location.pathname === "/") history.push("/dashboard");
    });
  } else {
    console.log("Logged out");
    store.dispatch(logout());
    history.push("/");
  }
});

export default app;
