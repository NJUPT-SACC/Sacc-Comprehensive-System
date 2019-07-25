import React from 'react';
const DataSet = require('@antv/data-set');
let PracticeComponent;

if (typeof window !== 'undefined') {
  PracticeComponent = require("viser-react");
}

const sourceData = [
  { item: '正确', count: 87 },
  { item: '错误', count: 13 },
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

export default class App extends React.Component {
  render() {
    return (
      <div className="pieChart">
        {
          typeof window !== 'undefined' ? 
          <PracticeComponent.Chart forceFit height={400} data={data} scale={scale}>
          <PracticeComponent.Tooltip showTitle={false} />
          <PracticeComponent.Coord type="theta" />
          <PracticeComponent.Axis />
          <PracticeComponent.Legend dataKey="item" />
          <PracticeComponent.Pie
            position="percent"
            color="item"
            style={{ stroke: '#fff', lineWidth: 1 }}
          />
        </PracticeComponent.Chart>
          :''
        }
      </div>

    );
  }
}