import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from './store';
import { Layout, Menu } from 'antd';

import Navigation from '../home/HomePage/components/Navigation'
import CompetitionMain from './competitionContent/CompetitionMain'
import Loading from '../components/loading/loading'

const { Header, Content, Footer } = Layout;
class Competition extends React.Component{
	
	render(){
		return (
			<Layout className="layout">
				<div style={{backgroundColor:'#000',zIndex:'1'}}><Navigation/></div>
				<Loading/>
				<CompetitionMain/>
		</Layout>	
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
export default connect(mapStateToProps,mapDispatchToProps)(Competition);