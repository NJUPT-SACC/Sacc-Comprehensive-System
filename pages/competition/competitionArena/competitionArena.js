import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Layout, Icon, Button, Radio } from 'antd';
import router from 'next/router'
import '../less/competitionArena.less'
import Navigation from '../../home/HomePage/components/Navigation'
import CompetitionArenaReady from './components/competitionArenaReady'



class CompetitionArena extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}

  componentDidMount(){
    // console.log(router.router.query)
  }  

	render(){
		return (
      <Layout className="layout">
        <div style={{backgroundColor:'#000',zIndex:'1'}}><Navigation/></div>
        <div style={{backgroundColor:'rgba(234,234,234,.4)',minHeight:'93vh'}}>
					<CompetitionArenaReady/>
        </div>
      </Layout>		
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		name: state.competition.competitionName
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArena);