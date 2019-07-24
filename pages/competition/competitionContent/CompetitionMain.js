import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import '../less/competitionMain.less'

import CompetitionCard from '../components/CompetitionCard'

class CompetitionMain extends React.Component{
	
	render(){
		return (
			<div style={{backgroundColor:'#eaeaea',minHeight:'93vh'}}>
				<div className='CompetitionMain-content'>
					<img src="https://static.leetcode-cn.com/cn-legacy-assets/images/LeetCode_Cup.png" alt="奖杯"/>
					<span className='CompetitionMain-content-title'>竞赛系统</span>
					<span className="CompetitionMain-content-text">快来参加每周排位赛，提升你的世界排名</span>
					
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

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionMain);