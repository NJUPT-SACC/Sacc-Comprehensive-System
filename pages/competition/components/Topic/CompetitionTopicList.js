import React from 'react';
import { connect } from 'react-redux';

import { actionCreators,store } from '../../store';
import { CompetitionTopicListUI } from '../../containers/Topic/index'

class CompetitionTopicList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options: []
    }
  }

  componentDidMount(){
    this.getOptions(this.props.topicId)
  }

  getOptions(topicId){
    let options = []
    Object.keys(this.props.competitionTopicList[topicId].options).forEach((key) => {
      let obj = new Object();
      obj.optionName = key;
      obj.optionDescription = this.props.competitionTopicList[topicId].options[key];
      options.push(obj)
    })

    this.setState({
      options:options
    })
  }
  
  render(){
    return (
        <CompetitionTopicListUI 
          competitionTopicList = { this.props.competitionTopicList[this.props.topicId] }
          options = { this.state.options }
          nextTopic = { this.props.nextTopic.bind(this) }
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
    receiveTopicList(){
      dispatch(actionCreators.receiveTopicList());
    },
    nextTopic(){
      let topicId = this.props.topicId + 1;
       dispatch(actionCreators.nextTopic(topicId))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionTopicList);