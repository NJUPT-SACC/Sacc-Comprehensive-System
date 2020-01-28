import React from 'react';
import { Row,Col } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionCountDown = () =>{

  const CompetitionCountDown = dynamic(import("../../components/CountDown/CompetitionCountDown"))
  return (
    <div className="CompetitionCountDown">
      <CompetitionCountDown />
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示全部比赛以及具体比赛列表
 * @param { Number } props.hourA 倒计时 hour的第一位
 * @param { Number } props.hourB 倒计时 hour的第二位
 * @param { Number } props.minuteA 倒计时 minute的第一位
 * @param { Number } props.minuteB 倒计时 minute的第二位
 * @param { Number } props.secondA 倒计时 second的第一位
 * @param { Number } props.secondB 倒计时 second的第二位
 */
export const CompetitionCountDownUI  = props =>{
  
  return (
    <div className="CompetitionCountDownList">
      <Row>
        <Col span={3}><p>{props.hourA}</p></Col>
        <Col span={3} offset={1}><p>{props.hourB}</p></Col>
        <Col span={1}><p>:</p></Col>
        <Col span={3}><p>{props.minuteA}</p></Col>
        <Col span={3} offset={1}><p>{props.minuteB}</p></Col>
        <Col span={1}><p>:</p></Col>
        <Col span={3}><p>{props.secondA}</p></Col>
        <Col span={3} offset={1}><p>{props.secondB}</p></Col>
      </Row>
    </div>
  )
}