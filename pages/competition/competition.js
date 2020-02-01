import React from 'react';
import { Row, Col, Affix } from 'antd';
import { connect } from 'react-redux';
import { actionCreators} from './store';
import './containers/competition.less';

import Navigation from '../../pages/home/HomePage/components/Navigation'
import { CompetitionList } from './containers/List'
import { CompetitionRank } from './containers/Rank'
import { CompetitionTopic } from './containers/Topic'
import { CompetitionInvitation } from './containers/Invitation'

class Competition extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="Competition">
        <Navigation></Navigation>
				{(()=>{
          switch (this.props.showPages) {
            case 'Topic':
              return <CompetitionTopic />;
            case 'List':
              return (
                <Row>
                  <div className="CompetitionList-Menu">
                    <p onClick={this.props.changeShow} className={this.props.showList == '所有比赛'? 'selected':''}>所有比赛</p>
                    <p onClick={this.props.changeShow} className={this.props.showList == '我参加的'? 'selected':''}>我参加的</p>
                  </div>
                  <Col span={12} offset={2}><CompetitionList /></Col>
                  <Col span={7} offset={1}><CompetitionRank /></Col>
                </Row>
              )
            case 'Invitation':
              return <CompetitionInvitation />;
            default:
              break;
          }
				})()}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    showList:state.competition.showList,
    competitionTopicId:state.competition.competitionTopicId,
    showPages:state.competition.showPages
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
