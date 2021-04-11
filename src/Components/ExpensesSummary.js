import React from "react";
import { connect } from "react-redux";
import visibleExpenses from "../selectors/expenses.selector";
import visibleExpensesTotal from "../selectors/expenses-total.selector";

const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  return (
    <div
      style={{ background: "beige", "padding": "20px", 'height': "80px" }}
    >
      <h1 style={{ "font-weight": "300" }}>
        Viewing <span style={{ "font-weight": "700" }}>{expensesCount}</span>{" "}
        {expensesCount === 1 ? "expense" : "expenses"} totalling &#8377;{" "}
        <span style={{ "font-weight": "700" }}>{expensesTotal}</span>
      </h1>
    </div>
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
