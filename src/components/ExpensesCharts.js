import React from 'react';
import { connect } from 'react-redux';
import { Chart } from 'react-google-charts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import selectExpenses from '../selectors/expenses';
import charts from '../../public/img/charts.svg';
import spinner from '../../public/img/spinner.gif';
import categoryCountAmountPercentage from '../statistics/categoryCountAmount';
import dailyAmount from '../statistics/dailyAmount';
import dailyCount from '../statistics/dailyCount';
import expenseAmount from '../statistics/descriptionAmount';

export const ExpensesCharts = (props) => {
  const pieChartData = expenseAmount(props.expenses);
  const barChartData = dailyAmount(props.expenses);
  const lineChartData = dailyCount(props.expenses);
  const bubbleChartData = categoryCountAmountPercentage(props.expenses);

  return (
    <section className='content-container'>
      <div className='component-container component-container--chart'>
        <h2 className='heading-secondary'>
          <FontAwesomeIcon icon={faChartBar} /> Expenses Charts
        </h2>
        {props.expenses.length === 0 ? (
          <div className='no-expense'>
            <img
              src={charts}
              alt='A man looking at charts'
              className='no-expense__illustration'
              width='773'
              height='532'
            />
            <p>Start adding Expenses to show Charts.</p>
          </div>
        ) : (
          <div>
            <div className='row'>
              <div className='col-1-of-2'>
                <div className='expense-chart'>
                  <div className='expense-chart__title'>
                    Expenses (By Percentage)
                  </div>
                  <Chart
                    className='expense-chart__chart'
                    width={'100%'}
                    height={'30rem'}
                    chartType='PieChart'
                    loader={
                      <div>
                        <img src={spinner} alt='' width='200' height='200' />
                        <p>Loading Pie Chart...</p>
                      </div>
                    }
                    data={pieChartData}
                    rootProps={{ 'data-test-id': '1' }}
                  />
                </div>
              </div>
              <div className='col-1-of-2'>
                <div className='expense-chart'>
                  <div className='expense-chart__title'>Expenses Pie</div>
                  <Chart
                    className='expense-chart__chart'
                    width={'100%'}
                    height={'30rem'}
                    chartType='PieChart'
                    loader={
                      <div>
                        <img src={spinner} alt='' width='200' height='200' />
                        <p>Loading Chart...</p>
                      </div>
                    }
                    data={pieChartData}
                    options={{
                      pieHole: 0.5,
                    }}
                    rootProps={{ 'data-test-id': '2' }}
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-1-of-2'>
                <div className='expense-chart'>
                  <div className='expense-chart__title'>
                    Daily Amount Of Expenses
                  </div>
                  <Chart
                    className='expense-chart__chart'
                    width={'100%'}
                    height={'30rem'}
                    chartType='Bar'
                    loader={
                      <div>
                        <img src={spinner} alt='' width='200' height='200' />
                        <p>Loading Bar Chart...</p>
                      </div>
                    }
                    data={barChartData}
                    rootProps={{ 'data-testid': '3' }}
                  />
                </div>
              </div>
              <div className='col-1-of-2'>
                <div className='expense-chart'>
                  <div className='expense-chart__title'>
                    Number of Daily Expenses
                  </div>
                  <Chart
                    className='expense-chart__chart'
                    width={'100%'}
                    height={'30rem'}
                    chartType='LineChart'
                    loader={
                      <div>
                        <img src={spinner} alt='' width='200' height='200' />
                        <p>Loading Line Chart...</p>
                      </div>
                    }
                    data={lineChartData}
                    options={{
                      hAxis: {
                        title: 'Date',
                      },
                      vAxis: {
                        title: 'Number',
                      },
                    }}
                    rootProps={{ 'data-testid': '4' }}
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='expense-chart'>
                <div className='expense-chart__title'>Expenses Categories</div>
                <Chart
                  className='expense-chart__chart'
                  width={'100%'}
                  height={'50rem'}
                  chartType='BubbleChart'
                  loader={
                    <div>
                      <img src={spinner} alt='' width='200' height='200' />
                      <p>Loading Bubble Chart...</p>
                    </div>
                  }
                  data={bubbleChartData}
                  options={{
                    hAxis: { title: 'Category' },
                    vAxis: { title: 'Number' },
                  }}
                  rootProps={{ 'data-testid': '5' }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpensesCharts);
