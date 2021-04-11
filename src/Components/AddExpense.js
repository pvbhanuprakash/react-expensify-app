import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses.actions";

const AddExpenseComponent = props => (
  <div>
    <div style={{ background: "beige", padding: "20px", height: "80px" }}>
      <h1 style={{ "font-weight": "300" }}>Add Expense</h1>
    </div>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(startAddExpense(expense));
        props.history.push("/dashboard");
      }}
    />
  </div>
);

export default connect()(AddExpenseComponent);
