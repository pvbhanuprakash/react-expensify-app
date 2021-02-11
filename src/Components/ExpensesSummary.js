import React from "react";
import { connect } from "react-redux";
import visibleExpenses from "../selectors/expenses.selector";
import visibleExpensesTotal from "../selectors/expenses-total.selector";

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  return (
    <h2>
      Viewing {expensesCount} {expensesCount === 1 ? "expense" : "expenses"}{" "}
      totalling &#8377; {expensesTotal}
    </h2>
  );
};

const mapStateToProps = state => {
  const selectedExpenses = visibleExpenses(state.expenses, state.filters);
  return {
    expensesCount: selectedExpenses.length,
    expensesTotal: visibleExpensesTotal(selectedExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
