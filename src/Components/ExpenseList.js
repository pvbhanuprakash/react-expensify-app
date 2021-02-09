import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import expensesSelector from "../selectors/expenses.selector";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  expenses: expensesSelector(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
