import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses.reducer";
import filtersReducer from "../reducers/filters.reducer";
import authReducer from '../reducers/auth.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = () =>
  createStore(
    combineReducers({ expenses: expensesReducer, filters: filtersReducer, auth: authReducer }),
    composeEnhancers(applyMiddleware(thunk))
  );

export default store;
