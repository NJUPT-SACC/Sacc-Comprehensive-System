import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';

import './less/CompetitionCard.less'

class CompetitionCard extends React.Component{
	
	render(){
    const mainStyle={
      background:'linear-gradient(#fffc43, #ffd479)',
      height:'28vh',
      width:`${this.props.width}vw`
    }
		return (
			<div className='CompetitionCard-content' style={mainStyle}>
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
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionCard);