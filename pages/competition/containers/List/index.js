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
 * @param {Function} showPages 根据比赛状态切换 邀请 / 比赛题目界面
 */
export const CompetitionListUI = props =>{
  const label = props.showList == '我参加的' ? {
    "labelList": personalLabelList,
    "span": 6
  }:{
    "labelList": allLabelList,
    "span": 4
  }
  return (
    <div>
      <Row>{ label.labelList.map(item =><Col span={label.span} className={item == '举办单位' ? 'createBy' :''}>{item}</Col>) }</Row>
      { props.showList == '我参加的' ?
        personalListUI(props.personalList,props.showEachRankList,props.showPages)
        :
        allListUI(props.allList,props.showPages)
      }
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示具体比赛列表的UI部分
 * @param {Array} list 个人参与的比赛列表
 * @param {Function} showRank 切换查看该次比赛的排行榜
 * @param {Function} showPages 根据比赛状态切换 邀请 / 比赛题目界面
 */
const personalListUI = (list,showRank,showPages) =>{
  return (
    <div className="competitionPersonalList">
    {
      list.map(item => 
        <Row id={item.id} onClick={showRank}>
          <Col span={6}>{item.name}</Col>
          <Col span={6}>{item.time}</Col>
          <Col span={6}>{item.grade}</Col>
          <Col span={6} onClick={showPages}>{item.status}</Col>
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
 * @param {Function} showPages 根据比赛状态切换 邀请 / 比赛题目界面
 */
const allListUI = (list,showPages) =>{
  return (
    <div className="competitionAllList">
      {
        list.map(item => 
          <Row id={item.id}>
            <Col span={4}>{item.name}</Col>
            <Col span={4}>{item.endTime}</Col>
            <Col span={4}>{item.place}</Col>
            <Col span={6}>{item.createBy}</Col>
            <Col span={4} onClick={showPages}>{item.status}</Col>
          </Row>)
      }
    </div>
  )
}
