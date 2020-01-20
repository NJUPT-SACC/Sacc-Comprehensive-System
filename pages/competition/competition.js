import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { actionCreators} from './store';
import './containers/competition.less';

import Navigation from '../../pages/home/HomePage/components/Navigation'
import { CompetitionList } from './containers/List'
import { CompetitionRank } from './containers/Rank'


class Competition extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="Competition">
        <Navigation></Navigation>

        <Row>
          <Col span={12} offset={2}>
            <Col span={3}>
              <div className="CompetitionList-Menu">
                <p onClick={this.props.changeShow} className={this.props.show == '所有比赛'? 'selected':''}>所有比赛</p>
                <p onClick={this.props.changeShow} className={this.props.show == '我参加的'? 'selected':''}>我参加的</p>
              </div>
            </Col>
            <Col span={24}><CompetitionList></CompetitionList></Col>
          </Col>
          <Col span={7} offset={1}>
            <CompetitionRank></CompetitionRank>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    show:state.competition.show
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
