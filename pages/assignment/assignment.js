import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from './store/store';

class Assignment extends React.Component{
	
	render(){
		return (
            <div>
                Assignment
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
export default connect(mapStateToProps,mapDispatchToProps)(Assignment);