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
          showEachRankListOrTopic={this.props.showEachRankListOrTopic}
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
    showEachRankListOrTopic(e){  
      let competitionId = e.currentTarget.id
      if(e.currentTarget.lastElementChild.innerText === '已结束')
        dispatch(actionCreators.showTopic(competitionId))
      else
        dispatch(actionCreators.showEachRankList(competitionId))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);