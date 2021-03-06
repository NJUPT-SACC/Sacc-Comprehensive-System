import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Layout, Icon, Button, Radio } from 'antd';
import router from 'next/router'
import '../less/competitionArena.less'
import Navigation from '../../home/HomePage/components/Navigation'
import CompetitionArenaReady from './components/competitionArenaReady'
import CompetitionArenaStart from './components/competitionArenaStart'


class CompetitionArena extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			started:true
		}
	}

	render(){
		return (
      <Layout className="layout">
        <div style={{backgroundColor:'#000',zIndex:'1'}}><Navigation/></div>
        <div style={{backgroundColor:'rgba(234,234,234,.4)',minHeight:'93vh'}}>
					{this.state.started?<CompetitionArenaStart/>:<CompetitionArenaReady/>}
        </div>
      </Layout>		
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		id: state.competition.competitionId
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArena);