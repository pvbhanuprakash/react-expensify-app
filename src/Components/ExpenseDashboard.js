import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const DashboardComponent = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardComponent;
