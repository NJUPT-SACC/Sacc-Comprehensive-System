import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Layout } from 'antd';
import router from 'next/router'

import Navigation from '../../home/HomePage/components/Navigation'



import '../less/competitionArena.less'
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
    console.log(this.props.userName)
		return (
      <Layout className="layout">
        <div style={{backgroundColor:'#000',zIndex:'1'}}><Navigation/></div>
        <div style={{backgroundColor:'#eaeaea',minHeight:'93vh'}} onClick={this.print}>
          竞技场欢迎你
					{this.props.name}
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