import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileCsv,
  faExclamationTriangle,
  faBan,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTrashAlt,
  faArrowAltCircleDown,
} from '@fortawesome/free-regular-svg-icons';
import selectExpenses from '../selectors/expenses';

export const ExpensesData = (props) => (
  <main className='main-content'>
    <section className='content-container'>
      <div className='component-container'>
        <div className='component'>
          <h2 className='heading-secondary'>
            <FontAwesomeIcon icon={faFileCsv} className='fa-icon' /> Download
            Data
          </h2>
          {props.expenses.length === 0 ? (
            <div>
              <p className='component__message'>
                No Expenses to download.{' '}
                <Link to='/create' className='router-link router-link--add'>
                  Add Expenses
                </Link>{' '}
                or change filters to show expenses.
              </p>
              <div className='component__content'>
                <FontAwesomeIcon
                  icon={faBan}
                  className='component__illustration component__illustration--empty'
                />
              </div>
            </div>
          ) : (
            <div>
              <p className='component__message'>
                Click on the download icon to download your expenses in CSV
                format. Expenses downloaded are based on filters.
              </p>
              <div className='component__content'>
                <CSVLink
                  data={props.expenses.map((expense, index) => ({
                    ...expense,
                    id: index + 1,
                    amount: expense.amount / 100,
                    createdAt: moment(expense.createdAt).format('DD/MM/YYYY'),
                  }))}
                  aria-label='CSV Link'
                >
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    className='component__illustration'
                  />
                </CSVLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    <section className='content-container margin-top-md'>
      <div className='component-container'>
        <div className='component'>
          <h2 className='heading-secondary'>
            <FontAwesomeIcon icon={faExclamationTriangle} className='fa-icon' />{' '}
            Delete Data
          </h2>
          {props.expenses.length === 0 ? (
            <div>
              <p className='component__message'>
                No Expenses to delete.{' '}
                <Link to='/create' className='router-link router-link--add'>
                  Add Expenses
                </Link>{' '}
                or change filters to show expenses.
              </p>
              <div className='component__content'>
                <FontAwesomeIcon
                  icon={faBan}
                  className='component__illustration component__illustration--empty'
                />
              </div>
            </div>
          ) : (
            <div>
              <p className='component__message'>
                Note: This action is irreversible and will delete all Expensus's
                data relating to your account permanently.
              </p>
              <div className='component__content'>
                <CSVLink
                  data={props.expenses.map((expense, index) => ({
                    ...expense,
                    id: index,
                    amount: expense.amount / 100,
                    createdAt: moment(expense.createdAt).format('DD/MM/YYYY'),
                  }))}
                  aria-label='CSV Link'
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className='component__illustration component__illustration--delete'
                  />
                </CSVLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  </main>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesData);
