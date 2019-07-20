import React from 'react';
import { connect } from 'react-redux';
import { actionCreators, store} from './store';
import HomePage from './HomePage/HomePage';
import PersonCenter from './PersonCenter/personCenter';

class Home extends React.Component{
	render(){
		return (
      <div>
        <HomePage />
        <PersonCenter />
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
