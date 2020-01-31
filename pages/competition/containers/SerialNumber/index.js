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
 * @param { Array } props.multipleIndex 选择题序号数组
 * @param { Array } props.programmingIndex 编程题序号数组
 */
export const CompetitionSerialNumberUI  = props =>{
  return (
    <div className="CompetitionSerialNumberList">
      <div className="CompetitionSerialNumberMultiple">
        <h4>选择题</h4>
        <Row>
        { props.multipleIndex.map((item,index) => <Col span={5} id={index} className={props.topicId > index ? 'serialNumberSelected':''}>{item}</Col>)  }
        </Row>
      </div>
      <div className="CompetitionSerialNumberProgramming">
        <h4>编程题</h4>
        <Row>
        { props.programmingIndex.map((item,index) => <Col span={5} id={index} className={props.topicId > index ? 'serialNumberSelected':''}>{item}</Col>)  }
        </Row>
      </div>
    </div>
  )
}