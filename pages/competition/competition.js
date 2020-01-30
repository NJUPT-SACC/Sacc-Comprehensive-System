import React from 'react';
import { Row, Col, Affix } from 'antd';
import { connect } from 'react-redux';
import { actionCreators} from './store';
import './containers/competition.less';

import Navigation from '../../pages/home/HomePage/components/Navigation'
import { CompetitionList } from './containers/List'
import { CompetitionRank } from './containers/Rank'
import { CompetitionTopic } from './containers/Topic'
import { CompetitionCountDown } from './containers/CountDown'
import { CompetitionSerialNumber } from './containers/SerialNumber'

class Competition extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="Competition">
        <Navigation></Navigation>
				{(()=>{
          if(this.props.competitionTopicId != ''){
            return (
              <Row>
                <Col span={11} offset={3}><CompetitionTopic /></Col>
                <Col span={8} offset={1}>
                <Affix offsetTop={120}>
                  <CompetitionCountDown />
                  <CompetitionSerialNumber />
                </Affix>
                </Col>
            </Row>
            )
          }
          else{
            return (
              <Row>
                <Col span={12} offset={2}>
                  <Col span={3}>
                    <div className="CompetitionList-Menu">
                      <p onClick={this.props.changeShow} className={this.props.show == '所有比赛'? 'selected':''}>所有比赛</p>
                      <p onClick={this.props.changeShow} className={this.props.show == '我参加的'? 'selected':''}>我参加的</p>
                    </div>
                  </Col>
                  <Col span={24}><CompetitionList /></Col>
                </Col>
                <Col span={7} offset={1}><CompetitionRank /></Col>
              </Row>
            )
          }
				})()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    show:state.competition.show,
    competitionTopicId:state.competition.competitionTopicId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeShow(e){
      dispatch(actionCreators.changeShow(e.target.innerText))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Competition);
