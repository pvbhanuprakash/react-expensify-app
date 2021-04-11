import React from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import ExpenseForm from "./ExpenseForm";
import {
  startEditExpense,
  startRemoveExpense
} from "../actions/expenses.actions";

const EditComponent = props => {
  console.log(props);
  return (
    <div>
      <div style={{ background: "beige", padding: "20px", height: "80px" }}>
        <h1 style={{ "font-weight": "300" }}>Edit Expense</h1>
      </div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(startEditExpense(props.expense.id, expense));
          props.history.push("/dashboard");
        }}
      />
      <div
        style={{ display: "flex", "justify-content": "center", margin: "10px" }}
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            props.dispatch(startRemoveExpense({ id: props.expense.id }));
            props.history.push("/dashboard");
          }}
        >
          Remove Expense
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

export default connect(mapStateToProps)(EditComponent);
