import React from 'react';
import { connect } from 'react-redux';

import { actionCreators,store } from '../../store';
import { CompetitionListUI } from '../../containers/List/index'

class CompetitionListTable extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveList()
    this.props.receiveAllList()
    this.props.receiveTopicList()
  }

  render(){
    return (
        <CompetitionListUI 
          show={this.props.show}
          allList={this.props.competitionAllList}
          personalList={this.props.competitionList}
          showEachRankList={this.props.showEachRankList}
          showTopic={this.props.showTopic}
        />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionList:state.competition.competitionList,
    competitionAllList:state.competition.competitionAllList,
    show:state.competition.show
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    receiveList(){
      dispatch(actionCreators.receiveList());
    },
    receiveAllList(){
      dispatch(actionCreators.receiveAllList())
    },
    receiveTopicList(){
      dispatch(actionCreators.receiveTopicList())
    },
    showEachRankList(e){  
        dispatch(actionCreators.showEachRankList(e.currentTarget.id))
    },
    showTopic(e){
      if(e.target.innerText === '进行中')
        dispatch(actionCreators.showTopic(e.target.parentNode.id))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);