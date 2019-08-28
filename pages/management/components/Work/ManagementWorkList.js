import React from 'react';
import { connect } from 'react-redux';

class ManagementWorkList extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div></div> 
    )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ManagementWorkList);