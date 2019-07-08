import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../store';
import Link from 'next/link';
// 页面

class App extends React.Component{
	
	render(){
		return (
			<div>
				sacc
				<Link href="/management/management">
					<a>here</a>
				</Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(App);