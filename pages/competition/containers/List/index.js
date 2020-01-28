import React from 'react';
import { Row,Col } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

const personalLabelList = ['名称','时间','成绩','状态']
const allLabelList = ['名称','时间','地点','举办单位','状态']

export const CompetitionList = () =>{

  const CompetitionListTable = dynamic(import("../../components/List/CompetitionListTable"))
  return (
    <div className="CompetitionList">
      <h3>比赛记录</h3>
      <div className="competition-content">
        <CompetitionListTable />
      </div>
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示全部比赛以及具体比赛列表
 * @param {string} props.show 展示哪个列表
 * @param {Array} props.allList 所有比赛列表
 * @param {Array} props.personalList 具体比赛列表  
 * @param {Function} props.showEachRankList 切换具体比赛列表
 */
export const CompetitionListUI = props =>{
  const label = props.show == '我参加的' ? {
    "labelList": personalLabelList,
    "span": 6
  }:{
    "labelList": allLabelList,
    "span": 4
  }
  return (
    <div>
      <Row>{ label.labelList.map(item =><Col span={label.span}>{item}</Col>) }</Row>
      { props.show == '我参加的' ?
        personalListUI(props.personalList,props.showEachRankListOrTopic)
        :
        allListUI(props.allList)
      }
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示具体比赛列表的UI部分
 * @param {Array} list 个人参与的比赛列表
 * @param {Function} func 切换查看该次比赛的排行榜
 */
const personalListUI = (list,func) =>{
  return (
    <div>
    {
      list.map(item => 
        <Row style={{borderBottom: '1px solid #ddd'}}  id={item.id} onClick={func}>
          <Col span={6}>{item.name}</Col>
          <Col span={6}>{item.time}</Col>
          <Col span={6}>{item.grade}</Col>
          <Col span={6}>{item.status}</Col>
        </Row>
      )
    }
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示全部比赛列表的UI部分
 * @param {Array} list 全部比赛列表
 */
const allListUI = list =>{
  return (
    <div>
      {
        list.map(item => 
          <Row style={{borderBottom: '1px solid #ddd'}} key={item.id}>
            <Col span={4}>{item.name}</Col>
            <Col span={4}>{item.endTime}</Col>
            <Col span={4}>{item.place}</Col>
            <Col span={6}>{item.createBy}</Col>
            <Col span={4}>{item.status}</Col>
          </Row>)
      }
    </div>
  )
}
