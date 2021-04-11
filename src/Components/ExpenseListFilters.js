import "react-dates/initialize";
import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters.actions";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  // useStyles = makeStyles((theme) => ({
  //   formControl: {
  //     margin: theme.spacing(1),
  //     minWidth: 120,
  //   },
  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },
  // }));

  // classes = useStyles();

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div style={{ display: "flex", "justify-content": "center" }}>
        <div style={{ margin: "10px" }}>
          <TextField
            id="outlined-search"
            label="Search Expense"
            type="search"
            variant="outlined"
            value={this.props.filters.text}
            autoFocus
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Sort by
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.filters.sortBy}
              onChange={e => {
                e.target.value === "amount"
                  ? this.props.dispatch(sortByAmount())
                  : this.props.dispatch(sortByDate());
              }}
              label="Sort by"
            >
              <MenuItem value="date">Date</MenuItem>
              <MenuItem value="amount">Amount</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ margin: "10px" }}>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            numberOfMonths={1}
            showClearDates={true}
            onFocusChange={focusedInput =>
              this.setState({ calendarFocused: focusedInput })
            }
            isOutsideRange={() => false}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);
