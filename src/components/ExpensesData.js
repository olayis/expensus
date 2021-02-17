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
import {
  startDeleteData,
  startDeleteDataSelected,
  stopDeleteDataSelected,
} from '../actions/data';
import { startLogout } from '../actions/auth';
import ConfirmationModal from './ConfirmationModal';

export const ExpensesData = (props) => {
  const onDeleteData = () => {
    props.startDeleteData();
    props.startLogout();
    props.stopDeleteDataSelected();
  };

  const handleStartDeleteDataSelected = () => {
    props.startDeleteDataSelected();
  };

  const handleStopDeleteDataSelected = () => {
    props.stopDeleteDataSelected();
  };

  const goBack = () => {
    props.history.goBack();
  };

  return (
    <main className='main-content'>
      <section className='content-container'>
        <span className='input-field__back' onClick={goBack}>
          &#8592;
        </span>
        <div className='component-container'>
          <div className='component'>
            <h2 className='heading-secondary'>
              <FontAwesomeIcon icon={faFileCsv} className='fa-icon' /> Download
              Data
            </h2>
            {props.expenses.length === 0 ? (
              <div>
                <p className='component__message'>
                  No Expenses to delete.{' '}
                  {props.expensesWithoutFilters.length === 0 ? (
                    <Link to='/create' className='router-link router-link--add'>
                      Add Expenses
                    </Link>
                  ) : (
                    <span>Clear current filters to download expenses</span>
                  )}
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
                    aria-label='CSV Download Link'
                    filename={'expenses.csv'}
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
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                className='fa-icon'
              />{' '}
              Delete Data
            </h2>
            <div>
              <p className='component__message'>
                Note: This action is irreversible and will delete all Expensus's
                data relating to your account permanently.
              </p>
              <div className='component__content'>
                <button
                  onClick={handleStartDeleteDataSelected}
                  className='component__delete-btn'
                  aria-label='Delete your data on Expensus permanently'
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    className='component__illustration component__illustration--delete'
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ConfirmationModal
          handleDeleteData={onDeleteData}
          deleteSelected={props.deleteSelected}
          stopDeleteDataSelected={handleStopDeleteDataSelected}
        />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    expensesWithoutFilters: state.expenses,
    deleteSelected: state.data.deleteSelected,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startDeleteData: () => dispatch(startDeleteData()),
  startLogout: () => dispatch(startLogout()),
  startDeleteDataSelected: () => dispatch(startDeleteDataSelected()),
  stopDeleteDataSelected: () => dispatch(stopDeleteDataSelected()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesData);
