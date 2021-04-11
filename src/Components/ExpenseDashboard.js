import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const DashboardComponent = props => (
  <div>
    <ExpensesSummary />
    <ExpenseListFilters />
    <div style={{ margin: "0 80px 30px 80px" }}>
      <ExpenseList />
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: "fixed",
          right: "15px",
          bottom: "20px"
        }}
        onClick={() => {
          props.history.push("/create");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  </div>
);

export default DashboardComponent;
