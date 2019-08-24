import React from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage/HomePage';
//document.cookie = `authkey=12312312312`

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
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
