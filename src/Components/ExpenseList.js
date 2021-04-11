import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import expensesSelector from "../selectors/expenses.selector";

const ExpenseList = props => (
  <div>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "30px"
      }}
    >
      {props.expenses.length > 0 ? (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <h4>Expenses list empty</h4>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  expenses: expensesSelector(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
