import React from 'react';
import { Button, Menu, Icon, Dropdown, Row, Col, Affix } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionTopic = () =>{
  const CompetitionTopicList = dynamic(import("../../components/Topic/CompetitionGetTopicList"))
  const CompetitionCountDown = dynamic(import("../../components/Topic/CompetitionCountDown"))
  const CompetitionSerialNumber = dynamic(import("../../components/Topic/CompetitionSerialNumberList"))
  
  return (
      <Row>
        <Col span={11} offset={3}><CompetitionTopicList /></Col>
        <Col span={8} offset={1}>
        <Affix offsetTop={120}>
          <CompetitionCountDown />
          <CompetitionSerialNumber />
        </Affix>
        </Col>
    </Row>
  )
}

/**
 * @author HKFPouu
 * @description 展示选择题题目的UI部分
 * @param { Boolean } props.show 展示 选择题 / 编程题
 * @param { Object } props.competitionTopicList 单道选择题
 * @param { String } props.competitionTopicList.title 单道选择题 题目标题
 * @param { String } props.competitionTopicList.description 单道选择题 题目描述
 * @param { Array } props.options 单道选择题 题目选项
 * @param { Function } props.getValue 获取选择题选项值
 * @param { Function } props.nextTopic 切换下一题
 */
export const CompetitionTopicListUI  = props =>{
  const CompetitionCodeMirror = dynamic(import("../../components/Topic/CompetitionChangeOptions"))
  
  if(props.show){
    const { title, description} = props.competitionTopicList;
    return (
      <div className="CompetitionMultipleChoice">
        <div className="CompetitionTopicTitle">
        { title }
        </div>
        <div className="CompetitionTopicDescription">
          <div>
          <p>{ description }</p>
          </div>
        </div>
        <div className="CompetitionTopicOption">
          <div>
          {
            props.options.map(item =>
              <p onClick={props.getValue}>{item.optionName} : {item.optionDescription}</p>)
          }
          </div>
        </div>
        <div className="CompetitionTopicSelect">
          <Button onClick={ props.nextTopic }>下一题</Button>
          <Button>交卷</Button>
        </div>
      </div>
    )
  }
  else
    return <CompetitionCodeMirror />
}

/**
 * @author HKFPouu
 * @description 编程题编辑器UI部分
 * @param { Function } props.changeMode 更改编辑器当前支持语言
 * @param { String } props.mode 编辑器当前支持语言
 */
export const CompetitionCodeMirrorUI = props =>{
  const CompetitionCodeMirrorShow = dynamic(import("../../components/Topic/CompetitionCodeMirrorShow"), {
    ssr: false
  })

  const menu = (
    <Menu onClick={props.changeMode}>
      <Menu.Item key="1">C</Menu.Item>
      <Menu.Item key="2">Cpp</Menu.Item>
      <Menu.Item key="3">Java</Menu.Item>
    </Menu>
  );

  return (
    <div className="CompetitionProgrammingProblem">
      <Dropdown overlay={menu} placement="bottomRight">
        <Button>{props.mode}<Icon type="down" /></Button>
      </Dropdown>
      <CompetitionCodeMirrorShow />
    </div> 
  )
}

/**
 * @author HKFPouu
 * @description 展示比赛题目的序号列表UI部分
 * @param { Array } props.multipleIndex 选择题序号数组
 * @param { Array } props.programmingIndex 编程题序号数组
 * @param { Number } props.topicId 当前题目序号
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