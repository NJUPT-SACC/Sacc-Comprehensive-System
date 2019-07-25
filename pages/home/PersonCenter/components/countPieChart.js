import React from 'react';
import CompetitionPieChart from './CompetitionPieChart';
import PracticePieChart from './PracticePieChart';
import '../less/countPieChart.less';
import Count from './count';
class CountPieChart extends React.Component{
  render(){
    return (
      <div className="count-pieChart-Box">
        <Count/>
        <div className="count-pieChart">
          <CompetitionPieChart/>
          <PracticePieChart/>          
        </div>
      </div>
    )
  }
}

export default CountPieChart
