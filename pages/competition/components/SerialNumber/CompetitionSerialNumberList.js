import React from 'react';
import { connect } from 'react-redux';

import { actionCreators,store } from '../../store';
import { CompetitionSerialNumberUI } from '../../containers/SerialNumber/index'

class CompetitionSerialNumber extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      indexArr: []
    }
  }

  componentDidMount(){
    let indexArr = []
    for(let index = 1;index <= this.props.competitionTopicList.length; index++)
      indexArr.push(index)
    this.setState({
      indexArr: indexArr
    })
  }
  render(){
    return (
        <CompetitionSerialNumberUI
          indexArr = { this.state.indexArr }
        />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionTopicList:state.competition.competitionTopicList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionSerialNumber);