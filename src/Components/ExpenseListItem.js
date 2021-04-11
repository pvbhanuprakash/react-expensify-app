import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt,
  note
}) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} style={{ backgroundColor: "Gold" }}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <Link to={`/edit/${id}`}>
              <h2>{description}</h2>
            </Link>
            <h3>{note ? note : "-"}</h3>
          </Typography>
          <Typography variant="body2" component="p">
            &#8377; {amount}
            <br />
            {`Created on: ${moment(createdAt).format("DD MMM, YYYY")}`}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExpenseListItem;
