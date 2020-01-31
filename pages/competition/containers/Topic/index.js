import React from 'react';
import { Button, Menu, Icon, Dropdown } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionTopic = () =>{

  const CompetitionTopicList = dynamic(import("../../components/Topic/CompetitionTopicList"))

  return (
      <CompetitionTopicList />
  )
}

/**
 * @author HKFPouu
 * @description 展示选择题题目
 * @param { Object } props.competitionTopicList 展示的题目
 */
export const CompetitionTopicListUI  = props =>{
  const CompetitionCodeMirror = dynamic(import("../../components/Topic/CompetitionChangeOptions"))
  
  if(props.show)
    return (
      <div className="CompetitionMultipleChoice">
        <div className="CompetitionTopicTitle">
        { props.competitionTopicList.title }
        </div>
        <div className="CompetitionTopicDescription">
          <div>
          <p>{ props.competitionTopicList.description }sdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
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
  else
    return <CompetitionCodeMirror />
}

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