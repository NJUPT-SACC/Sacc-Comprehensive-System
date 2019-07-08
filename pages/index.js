import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from '../store';
import Link from 'next/link';
import Head from 'next/head';
// 页面


class App extends React.Component{
	
	render(){
		return (
			<div>
				<Head>
					<title>SACC of Integrated system</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
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