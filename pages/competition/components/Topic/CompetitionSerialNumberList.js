import React from 'react';
import { connect } from 'react-redux';

import { actionCreators,store } from '../../store';
import { CompetitionSerialNumberUI } from '../../containers/Topic/index'

class CompetitionSerialNumber extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      multipleIndex: [],
      programmingIndex: []
    }
  }

  componentDidMount(){
    let multipleIndex = []
    for(let index = 1;index <= this.props.competitionTopicList.length; index++)
      multipleIndex.push(index)
    this.setState({
      multipleIndex: multipleIndex
    })
  }
  render(){
    return (
        <CompetitionSerialNumberUI
          multipleIndex = { this.state.multipleIndex }
          programmingIndex = { this.state.programmingIndex }
          topicId = { this.props.topicId }
        />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionTopicList:state.competition.competitionTopicList,
    topicId:state.competition.topicId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionSerialNumber);