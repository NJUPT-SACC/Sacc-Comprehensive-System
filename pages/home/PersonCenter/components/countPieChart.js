import React from 'react';
const DataSet = require('@antv/data-set');
let VComponent;

if (typeof window !== 'undefined') {
  VComponent = require("viser-react");
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
          <VComponent.Chart forceFit height={400} data={data} scale={scale}>
          <VComponent.Tooltip showTitle={false} />
          <VComponent.Coord type="theta" />
          <VComponent.Axis />
          <VComponent.Legend dataKey="item" />
          <VComponent.Pie
            position="percent"
            color="item"
            style={{ stroke: '#fff', lineWidth: 1 }}
          />
        </VComponent.Chart>
          :''
        }
      </div>

    );
  }
}