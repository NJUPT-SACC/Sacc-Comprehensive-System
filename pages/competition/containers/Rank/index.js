import React from 'react';
import { Row,Col,Avatar } from 'antd';
import dynamic from 'next/dynamic';
import './index.less';

export const CompetitionRank = () =>{
  const CompetitionRankImport = dynamic(import('../../components/Rank/CompetitionRankImport'))

  return (
    <div className="CompetitionRank">
      <h2>排行榜</h2>
      <div className="CompetitionRank-content">
        <CompetitionRankImport />
      </div>
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示排行榜的UI部分
 * @param {String} props.show 展示总榜/具体比赛榜
 * @param {Array}  props.allRankingList 总榜
 * @param {Array}  props.personalRankingList 具体比赛榜
 */
export const CompetitionRankUI = props =>{
  const data = props.show == "所有比赛" ? props.allRankingList : props.personalRankingList
  return (
    <div>
      {
        data.map(item =>
        <Row>
          <Col span={8}>        
            <Avatar style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }} size="large">
              {item.name}
            </Avatar>
          </Col>
          <Col span={8}>{item.name}</Col>
          <Col span={8}>{item.grade}</Col>
        </Row>  
        )
      }
    </div>
  )
}