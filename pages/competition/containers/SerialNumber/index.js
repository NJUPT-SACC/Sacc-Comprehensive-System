import React from 'react';
import { Row,Col } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionSerialNumber = () =>{

  const CompetitionSerialNumber = dynamic(import("../../components/SerialNumber/CompetitionSerialNumberList"))
  return (
    <div className="CompetitionSerialNumber">
      <CompetitionSerialNumber />
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示比赛题目的序号列表
 * @param { Array } props.indexArr 题目序号数组
 */
export const CompetitionSerialNumberUI  = props =>{
  return (
    <div className="CompetitionSerialNumberList">
      <Row>
      { props.indexArr.map(item => <Col span={5}>{item}</Col>)  }
      </Row>
    </div>
  )
}