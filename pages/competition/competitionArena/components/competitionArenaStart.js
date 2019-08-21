import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Icon } from 'antd';
import './less/competitionArenaStart.less'
import CompetitionArenaStartItem from './competitionArenaStartItem'
import CompetitionArenaStartList from './competitionArenaStartList'
import Router from 'next/router'
class CompetitionArenaStart extends React.Component{
	gotoCompetition=()=>{
    Router.push({
			pathname: '/competition'
		})
  }
	render(){
		return (
			<Row style={{marginTop:'24px'}}>
        <Col span={14} offset={5}>
            <div style={{fontSize:'18',color:'gray'}}>
              <div style={{cursor:'pointer'}} onClick={this.gotoCompetition}><Icon type="left" />  返回比赛主页</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div>
              <div id='competitionArenaStart-title'>计算机基础知识大赛</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div className="competitionArenaStart-slider">
              <div className="competitionArenaStart-slider-text">>距离比赛结束还有120分钟</div>
              <div className="competitionArenaStart-slider-block"></div>
            </div>
          </Col>
          <Col span={9} offset={5}>
            <CompetitionArenaStartItem/>
          </Col>
          <Col span={4} offset={1}>
            <CompetitionArenaStartList/>
          </Col>
        </Row>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArenaStart);