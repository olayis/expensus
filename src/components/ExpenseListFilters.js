import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faFilter,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import {
  setTextFilter,
  sortByDateRecent,
  sortByDateOldest,
  sortByAmountHighest,
  sortByAmountLowest,
  sortByDescriptionAtoZ,
  sortByDescriptionZtoA,
  sortByCategory,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import 'react-dates/initialize';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
    showFilter: false,
    hasFilters: false,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
    this.handleHasFilters();
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    switch (e.target.value) {
      case 'date(recent)':
        this.props.sortByDateRecent();
        break;

      case 'date(oldest)':
        this.props.sortByDateOldest();
        break;

      case 'amount(highest)':
        this.props.sortByAmountHighest();
        break;

      case 'amount(lowest)':
        this.props.sortByAmountLowest();
        break;

      case 'description(a_to_z)':
        this.props.sortByDescriptionAtoZ();
        break;

      case 'description(z_to_a)':
        this.props.sortByDescriptionZtoA();
        break;

      case 'category':
        this.props.sortByCategory();
        break;
    }
  };

  onToggleFiltersVisibility = () => {
    this.setState((prevState) => ({
      showFilter: !prevState.showFilter,
    }));
  };

  handleHasFilters = () => {
    this.props.filters.startDate
      ? this.setState(() => ({
          hasFilters: true,
        }))
      : this.props.filters.endDate
      ? this.setState(() => ({
          hasFilters: true,
        }))
      : this.setState(() => ({
          hasFilters: false,
        }));
  };

  render() {
    return (
      <div className='content-container'>
        <div className='filter-container'>
          <div className='input-group'>
            <div className='mobile-filter'>
              <div className='input-group__item'>
                <input
                  className='text-input text-input--search'
                  type='text'
                  placeholder='Search'
                  value={this.props.filters.text}
                  onChange={this.onTextChange}
                  aria-label='Search expenses'
                  name='search'
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className='text-input--search__icon'
                />
              </div>
              <span
                className={`d-none mobile-filter__toggler ${
                  this.state.showFilter ? 'mobile-filter__toggler--active' : ''
                }`}
                onClick={this.onToggleFiltersVisibility}
                role='button'
                aria-label='toggle filter'
              >
                <FontAwesomeIcon
                  icon={faFilter}
                  className='mobile-filter__icon'
                />{' '}
                <span className='mobile-filter__text'>Show Filters</span>
                {this.state.hasFilters && (
                  <sup>
                    <FontAwesomeIcon icon={faCircle} />
                  </sup>
                )}
              </span>
            </div>
            <div
              className={`mobile-filter__toggle ${
                this.state.showFilter
                  ? 'mobile-filter--show'
                  : 'mobile-filter--hide'
              }`}
            >
              <div className='input-group__item dropdown'>
                <label className='text-input__label'>Sort by: </label>
                <select
                  className='dropdown--sort'
                  value={this.props.filters.sortBy}
                  onChange={this.onSortChange}
                  aria-label='Sort expenses'
                  name='sort'
                >
                  <option value='date(recent)'>Date (Recent)</option>
                  <option value='date(oldest)'>Date (Oldest)</option>
                  <option value='amount(highest)'>Amount (Highest)</option>
                  <option value='amount(lowest)'>Amount (Lowest)</option>
                  <option value='description(a_to_z)'>A to Z</option>
                  <option value='description(z_to_a)'>Z to A</option>
                  <option value='category'>Category</option>
                </select>
              </div>
              <div className='input-group__item'>
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
            </div>
          </div>
        </div>
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
  sortByDateRecent: () => dispatch(sortByDateRecent()),
  sortByDateOldest: () => dispatch(sortByDateOldest()),
  sortByAmountHighest: () => dispatch(sortByAmountHighest()),
  sortByAmountLowest: () => dispatch(sortByAmountLowest()),
  sortByDescriptionAtoZ: () => dispatch(sortByDescriptionAtoZ()),
  sortByDescriptionZtoA: () => dispatch(sortByDescriptionZtoA()),
  sortByCategory: () => dispatch(sortByCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
