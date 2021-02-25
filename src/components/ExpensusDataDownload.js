import React from 'react';
import moment from 'moment';
import { CSVLink } from 'react-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCsv } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import logEvent from '../actions/logEvent';

const ExpensusDataDownload = (props) => {
  return (
    <div className='component'>
      <h2 className='heading-secondary'>
        <FontAwesomeIcon icon={faFileCsv} className='fa-icon' /> Download Data
      </h2>
      <div>
        <p className='component__message'>
          Click on the download icon to download your expenses in CSV format.
          Expenses downloaded are based on filters.
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
            onClick={() =>
              logEvent('download_expense', { info: 'User downloaded data' })
            }
          >
            <FontAwesomeIcon
              icon={faArrowAltCircleDown}
              className='component__illustration'
            />
          </CSVLink>
        </div>
      </div>
    </div>
  );
};

export default ExpensusDataDownload;
