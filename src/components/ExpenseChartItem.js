import React from 'react';
import { Chart } from 'react-google-charts';
import spinner from '../../public/img/spinner.gif';

const ExpenseChartItem = (props) => (
  <div className='expense-chart'>
    <div className='expense-chart__title'>{props.title}</div>
    <Chart
      className='expense-chart__chart'
      width={props.width}
      height={props.height}
      chartType={props.chartType}
      loader={
        <div className='expense-chart__loader'>
          <img src={spinner} alt='' width='200' height='200' />
          <p>Loading Chart...</p>
        </div>
      }
      data={props.data}
      rootProps={props.chartRootProps}
      options={props.options}
    />
  </div>
);

export default ExpenseChartItem;
