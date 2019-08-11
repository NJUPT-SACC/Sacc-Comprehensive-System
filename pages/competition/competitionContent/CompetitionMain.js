import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import '../less/competitionMain.less'
import { actionCreators } from '../store';

import CompetitionCard from './components/CompetitionCard'
import CompetitionHistory from './components/CompetitionHistory'
import CompetitionRank from './components/CompetitionRank'

class CompetitionMain extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			ready:false
		}
	}

	componentDidMount(){
		if(!this.props.competitionList){
			this.props.initList();
		}
	}

	readyStart = (e) =>{
		e.target.parentNode.style.top = '10%';
		e.target.parentNode.style.left = '75%';
		e.target.parentNode.style.transform = 'scale(.5) translate(-50%,-50%)';
		if(!this.state.ready){
			setTimeout(()=>{
				this.setState({
					ready:true
				})
			},1000)
		}else{
			e.target.parentNode.style.top = '50%';
			e.target.parentNode.style.left = '50%';
			e.target.parentNode.style.transform = 'scale(1) translate(-50%,-50%)';
			this.setState({
				ready:false
			})
		}
	}

	render(){
		return (
			<div style={{backgroundColor:'#eaeaea',minHeight:'70vh'}}>
				<div className='CompetitionMain-content'>
					<div className='CompetitionMain-title'>
						<img src="https://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/VS%20%281%29.png" alt="奖杯"/>
						<div className='CompetitionMain-content-head'>竞赛系统</div>
						<div className="CompetitionMain-content-text">快来参加比赛，提升你的能力</div>
						<div className='CompetitionMain-content-button' onClick={this.readyStart}>{this.state.ready?"关闭":"开始"}</div>
					</div>
					{this.state.ready?<div className="CompetitionMain-main">
						<Row>
							<Col span={10} offset={1}><CompetitionCard width={22} competitionName={this.props.competitionList[0].name} startTime={this.props.competitionList[0].startTIme} endTime={this.props.competitionList[0].endTime} competitionId={this.props.competitionList[0].id}/></Col>
							<Col span={10} offset={2}><CompetitionCard width={22} competitionName={this.props.competitionList[1].name} startTime={this.props.competitionList[1].startTIme} endTime={this.props.competitionList[1].endTime} competitionId={this.props.competitionList[1].id}/></Col>
						</Row>
						<Row>
							<Col offset={1}><CompetitionHistory/></Col>
						</Row>
					</div>:''}
					{this.state.ready?<div className="CompetitionMain-rank">
						<Row>
							<Col>
								<CompetitionRank/>
							</Col>
						</Row>
					</div>:''}
				</div>
			</div>	
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		competitionList:state.competition.competitionList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		initList(){
      dispatch(actionCreators.init_list())
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionMain);