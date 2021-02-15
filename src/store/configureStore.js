import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import expensesReducer from "../reducers/expenses.reducer";
import filtersReducer from "../reducers/filters.reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () =>
  createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default store;
