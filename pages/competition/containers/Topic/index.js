import React from 'react';
import { Row,Col } from 'antd';
import dynamic from 'next/dynamic'
import './index.less'

export const CompetitionTopic = () =>{

  const CompetitionTopicList = dynamic(import("../../components/Topic/CompetitionTopicList"))
  return (
    <div className="CompetitionTopic">
      <CompetitionTopicList />
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示全部比赛以及具体比赛列表
 * @param { string } props.competitionTopicList 展示的题目
 */
export const CompetitionTopicListUI  = props =>{
  
  return (
    <div className="CompetitionTopicList">
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
            <p>{item.optionName} : {item.optionDescription}</p>)
			  }
        </div>
      </div>
      <div className="CompetitionTopicSelect">
        <button onClick={ props.nextTopic }>下一题</button>
        <button>交卷</button>
      </div>
    </div>
  )
}