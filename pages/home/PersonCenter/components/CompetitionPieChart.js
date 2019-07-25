import React from 'react';
const DataSet = require('@antv/data-set');
let CompetitionComponent;

if (typeof window !== 'undefined') {
  CompetitionComponent = require("viser-react");
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
          <CompetitionComponent.Chart forceFit height={400} data={data} scale={scale}>
          <CompetitionComponent.Tooltip showTitle={false} />
          <CompetitionComponent.Coord type="theta" />
          <CompetitionComponent.Axis />
          <CompetitionComponent.Legend dataKey="item" />
          <CompetitionComponent.Pie
            position="percent"
            color="item"
            style={{ stroke: '#fff', lineWidth: 1 }}
          />
        </CompetitionComponent.Chart>
          :''
        }
      </div>

    );
  }
}