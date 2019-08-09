import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from './store';
import { Layout, Menu } from 'antd';
import axios from 'axios';
import Navigation from '../home/HomePage/components/Navigation'
import CompetitionMain from './competitionContent/CompetitionMain'
import CompetitionArena from './competitionArena/competitionArena'
import Loading from '../components/loading/loading'
import { actionCreators } from '../home/store';

const { Header, Content, Footer } = Layout;
class Competition extends React.Component{
	
	render(){
		return (
			<Layout className="layout">
				<div style={{backgroundColor:'#000',zIndex:'1'}}><Navigation/></div>
				{/* <Loading width='100' height='100' scale='1'/> */}
				<CompetitionMain/>
		</Layout>	
		);
	}
	componentDidMount(){
		// 转json
		// axios.get('https://wangwenqin.cn/Sacc-Comprehensive-System/mock/questionList.json')
		// .then(res => {
		// 	let data = eval('(' + res.data + ')')
		// 	console.log(data.data)
		// })
		// .catch(err => {
		// 	console.log(err)
		// })
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