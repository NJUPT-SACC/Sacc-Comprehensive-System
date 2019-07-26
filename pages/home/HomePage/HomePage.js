import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import './less/scroll.less'
import Navigation from './components/Navigation'
import List from './components/List'
import GroupList from './components/GroupList'
import Footer from './components/Footer'
import Home from './components/Home'

class HomePage extends React.Component{
	
	render(){
		return (
            <div className="HomePage">
                <Home />
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
export default connect(mapStateToProps,mapDispatchToProps)(HomePage);