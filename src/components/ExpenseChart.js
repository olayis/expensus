import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
import charts from '../../public/img/charts.svg';
import categoryCountAmountPercentage from '../statistics/categoryCountAmount';
import dailyAmount from '../statistics/dailyAmount';
import dailyCount from '../statistics/dailyCount';
import expenseAmount from '../statistics/descriptionAmount';
import ExpenseChartItem from './ExpenseChartItem';

const ExpenseChart = (props) => {
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
            {props.expensesWithoutFilters.length === 0 ? (
              <p>Start adding Expenses to generate Charts.</p>
            ) : (
              <p>Clear current filters to generate Charts.</p>
            )}
          </div>
        ) : (
          <div>
            <div className='row'>
              <div className='col-1-of-2'>
                <ExpenseChartItem
                  title='Expenses (By Percentage)'
                  width='100%'
                  height='30rem'
                  chartType='PieChart'
                  data={pieChartData}
                  chartRootProps={{ 'data-testid': '1' }}
                />
              </div>
              <div className='col-1-of-2'>
                <ExpenseChartItem
                  title='Daily Amount Of Expenses'
                  width='100%'
                  height='30rem'
                  chartType='Bar'
                  data={barChartData}
                  chartRootProps={{ 'data-testid': '2' }}
                />
              </div>
            </div>
            <div className='row'>
              <ExpenseChartItem
                title='Daily Number of Expenses'
                width='100%'
                height='30rem'
                chartType='LineChart'
                data={lineChartData}
                chartRootProps={{ 'data-testid': '3' }}
                options={{
                  hAxis: {
                    title: 'Date',
                  },
                  vAxis: {
                    title: 'Number',
                  },
                }}
              />
            </div>
            <div className='row'>
              <ExpenseChartItem
                title='Daily Number of Expenses'
                width='100%'
                height='50rem'
                chartType='BubbleChart'
                data={bubbleChartData}
                chartRootProps={{ 'data-testid': '4' }}
                options={{
                  hAxis: { title: 'Category' },
                  vAxis: { title: 'Number' },
                }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpenseChart;
