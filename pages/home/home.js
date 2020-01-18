import React from 'react';
import { connect } from 'react-redux';
import { actionCreators} from './store';


class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>

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
