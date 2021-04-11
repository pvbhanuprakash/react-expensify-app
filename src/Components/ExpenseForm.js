import "react-dates/initialize";
import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import { TextField, Button } from "@material-ui/core";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    e.persist();
    this.setState(() => ({ note: e.target.value }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) this.setState(() => ({ amount }));
  };

  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount)
      this.setState(() => ({
        error: "Please provide Description and Amount"
      }));
    else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div style={{ display: "flex", "justify-content": "center" }}>
        {this.state.error && <p>{this.state.error}</p>}
        <form
          onSubmit={this.onSubmit}
          style={{
            display: "flex",
            "flex-direction": "column",
            width: "500px"
          }}
        >
          <div style={{ margin: "10px" }}>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              value={this.state.description}
              onChange={this.onDescriptionChange}
              fullWidth
            />
          </div>
          <div style={{ margin: "10px" }}>
            <TextField
              id="outlined-basic"
              label="Amount"
              variant="outlined"
              value={this.state.amount}
              onChange={this.onAmountChange}
              fullWidth
            />
          </div>
          <div style={{ display: 'flex', margin: "10px", "justify-content": "center", border: '1px' }}>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div style={{ margin: "10px" }}>
            <TextField
              id="outlined-multiline-static"
              label="Add a note for your expense (optional)"
              multiline
              rows={4}
              variant="outlined"
              value={this.state.note}
              onChange={this.onNoteChange}
              fullWidth
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Add Expense
          </Button>
        </form>
      </div>
    );
  }
}
