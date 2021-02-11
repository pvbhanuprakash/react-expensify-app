import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      &#8377; {amount} - {moment(createdAt).format("DD MMM, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;
