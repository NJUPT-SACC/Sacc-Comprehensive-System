import React from 'react';
import { connect } from 'react-redux';
import Head from './components/head';
import SlideBar from './components/slideBar';
import Radar from './components/radar';
import Navigation from '../HomePage/components/Navigation';
import './less/personCenter.less';

class PersonCenter extends React.Component{
	
	render(){
		return (
            <div className="personCenter">
                <Navigation />
                <Head />
                <SlideBar />
                <Radar />
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