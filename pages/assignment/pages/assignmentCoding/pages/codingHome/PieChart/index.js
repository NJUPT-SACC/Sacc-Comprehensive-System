import React from 'react'
import { connect } from 'react-redux'
import './index.less'
const DataSet = require('@antv/data-set');
let PieChartObj;
let finishedList = [];

if (typeof window !== 'undefined') {
  PieChartObj = require("viser-react");
}
class PieChart extends React.Component {
  constructor (props) {
    super (props);
  }

  drawChart () {
    const { questionList } = this.props;
    if (questionList.length) {
      finishedList = questionList.filter(item => {
        return item.finish === true
      });
      const sourceData = [
        {item: "已完成", count: finishedList.length},
        {item: "未完成 ", count: questionList.length - finishedList.length}
      ];
      const scale = [{
        dataKey: 'percent',
        min: 0,
        formatter: '.0%',
      }];
      const dv = new DataSet.View().source(sourceData);
      dv.transform({
        type: 'percent',
        field: 'count',
        dimension: 'item',
        as: 'percent'
      });
      const data = dv.rows;
      return (
        <PieChartObj.Chart height={300} width={300} data={data} scale={scale}>
          <PieChartObj.Tooltip showTitle={false} />
          <PieChartObj.Axis />
          <PieChartObj.Legend dataKey="item" />
          <PieChartObj.Coord type="theta" />
          <PieChartObj.Pie
            position="percent"
            color="item"
            style={{ stroke: '#fff', lineWidth: 1 }}
            label={['percent', {
              offset: -40,
              textStyle: {
                rotate: 0,
                textAlign: 'center',
                shadowBlur: 2,
                shadowColor: 'rgba(0, 0, 0, .45)'
              }
            }]}
          />
        </PieChartObj.Chart>
      )
    }
  }
  render () {
    const { questionList } = this.props;
    return (
      <div className="chart_container">
        <div className="chart_title">
          <span className="iconfont">&#xe88a;</span>
          <span>我的进度</span>
        </div>
        <div className="pieChart_content">
          {
            this.drawChart()
          }
          <div className="progress_list">
            <span><span style={{color: '#000000'}}>已完成</span> {finishedList.length}</span>
            <span><span style={{color: '#000000'}}>未完成</span> {questionList.length - finishedList.length}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questionList: state.assignment.questionList
});

export default connect(mapStateToProps, null)(PieChart);