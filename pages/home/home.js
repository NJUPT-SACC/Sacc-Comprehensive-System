import React from 'react';
import { connect } from 'react-redux';
import store from './store';
import './styles/reset.less'
import Navigation from './components/Navigation'
import Logo from './components/Logo'
import List from './components/List'
import GroupList from './components/GroupList'
import Footer from './components/Footer'

class Home extends React.Component{
	
	render(){
		return (
            <div>
                <Navigation />
                <Logo />
                <List />
                <GroupList />
                <Footer />
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