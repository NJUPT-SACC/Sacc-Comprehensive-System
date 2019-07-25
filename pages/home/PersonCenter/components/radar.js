import React from 'react';
const DataSet = require('@antv/data-set');
let ViserComponent;
import { Button, Menu, Dropdown, Icon } from 'antd';

if (typeof window !== 'undefined') {
  ViserComponent = require("viser-react");
}

function handleMenuClick(e) {

}


const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">前端工程师</Menu.Item>
    <Menu.Item key="2">后端工程师</Menu.Item>
    <Menu.Item key="3">C++工程师</Menu.Item>
  </Menu>
);

const sourceData = [
  { item: 'Javascript', a: 50 },
  { item: 'HTML/CSS', a: 50 },
  { item: 'Jquery', a: 50 },
  { item: 'Linux', a: 50 },
  { item: '网络基础', a: 50 }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['a'],
  key: 'user',
  value: 'score',
});
const data = dv.rows;

const scale = [{
  dataKey: 'score',
  min: 0,
  max: 80,
}];

export default class Radar extends React.Component {
  render() {
    const axis1Opts = {
      dataKey: 'item',
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false,
      }
    };

    const axis2Opts = {
      dataKey: 'score',
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null,
        },
      },
    };

    const coordOpts = {
      type: "polar",
      radius: "0.8",
    };

    return (
      <div className="radar">
        <div className="radarTitle">
          <p id="skill-tree">技能树</p>
          <Dropdown overlay={menu}>
            <Button>
              产品 
              <Icon type="down" />
            </Button>
          </Dropdown>
        </div>
        <div className="radarContent" style={{paddingBottom: '400px', height: 0, overflow: 'hidden'}}>
          {
            typeof window !== 'undefined' ? 
              <ViserComponent.Chart forceFit height={400} data={data} padding={[50, 50, 50, 50]} scale={scale}>
                <ViserComponent.Tooltip />
                <ViserComponent.Axis {...axis1Opts} />
                <ViserComponent.Axis {...axis2Opts} />
                <ViserComponent.Coord {...coordOpts} />
                <ViserComponent.Line position="item*score" color="user" size={2} />
                <ViserComponent.Point position="item*score" color="user" size={4} shape="circle"/>
                <ViserComponent.Area position="item*score" color="user"/>
              </ViserComponent.Chart>
            :''
          }
        </div>
      
      </div>
    );
  }
}
