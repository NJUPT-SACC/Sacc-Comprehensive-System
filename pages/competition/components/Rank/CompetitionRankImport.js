import React from 'react';
import { connect } from 'react-redux';
import { actionCreators,store } from '../../store';

import { CompetitionRankUI } from '../../containers/Rank/index'

class CompetitionRankImport extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveAllRankList()
  }

  render(){
    return (
      <CompetitionRankUI 
        show={this.props.show}
        personalRankingList={this.props.competitionList[this.props.competitionEachRankListId].rank}
        allRankingList={this.props.competitionAllRankList}
      />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    show: state.competition.show,
    competitionList:state.competition.competitionList,
    competitionAllRankList:state.competition.competitionAllRankList,
    competitionEachRankListId:state.competition.competitionEachRankListId,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    receiveAllRankList(){
      dispatch(actionCreators.receiveAllRankList());
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionRankImport);