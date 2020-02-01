import React from 'react';
import { connect } from 'react-redux';
import { actionCreators} from './store';
import { render } from 'react-dom';
import {Box} from './containers/Login';



class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="container">
      <Box/>
      </div>
    )
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
