import React from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage/HomePage';

class Home extends React.Component{
	render(){
		return (
      <div>
        <HomePage />
				
      </div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		authKey: state.home.authKey
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
