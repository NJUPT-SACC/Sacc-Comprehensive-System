import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Router from 'next/router'
import { Row, Col, Statistic } from 'antd';

import './less/CompetitionCard.less'
import { actionCreators } from '../../store';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
class CompetitionCard extends React.Component{

	getStartArena = () =>{
		this.props.competitionChangeName('计算机');
		Router.push({
			pathname: '/competition/Arena',
			query: { competitionNum: '计算机' }
		})
	}

	render(){
    const mainStyle={
      background:'linear-gradient(#fffc43, #ffd479)',
      height:'20vh',
      width:`${this.props.width}vw`
    }
		return (
			<div className='CompetitionCard-content' style={mainStyle} onClick={this.getStartArena}>
				<Row>
					<Col><div style={{fontSize:'32px'}}>“华为杯”程序设计大赛</div></Col>
				</Row>
				<Row>
					<Col><div style={{color: 'rgba(117, 116, 116, .6)',fontSize:'12px'}}>2019-7-37 18:00~20:00</div></Col>
				</Row>
				<div className='CompetitionCard-time'>
					<Countdown value={deadline} format="D 天 H 时 m 分 s 秒" />
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		competitionChangeName(name){
			dispatch(actionCreators.competition_change_name(name))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionCard);