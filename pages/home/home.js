import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import store from './store';

class Home extends React.Component{
	
	render(){
		return (
            <div>
                Home
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
export default connect(mapStateToProps,mapDispatchToProps)(Home);