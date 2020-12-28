import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  sortByDescription,
  setStartDate,
  setEndDate,
} from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else if (e.target.value === 'description') {
      this.props.sortByDescription();
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Search'
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        Sort by:
        <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
          <option value='description'>A to Z</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId='unique_start_date_id'
          endDate={this.props.filters.endDate}
          endDateId='unique_end_date_id'
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters,
});

const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDescription: () => dispatch(sortByDescription()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
