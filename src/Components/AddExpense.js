import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses.actions";

const AddExpenseComponent = props => (
  <div>
    <p>AddExpense</p>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpenseComponent);
