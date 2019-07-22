import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Head from './components/head'
import SlideBar from './components/slideBar'

class PersonCenter extends React.Component{
	
	render(){
		return (
            <div>
                <Head />
                <SlideBar />
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
export default connect(mapStateToProps,mapDispatchToProps)(PersonCenter);