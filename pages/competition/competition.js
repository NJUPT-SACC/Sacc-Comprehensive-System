import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from './store';

class Competition extends React.Component{
	
	render(){
		return (
            <div>
                Competition
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
export default connect(mapStateToProps,mapDispatchToProps)(Competition);