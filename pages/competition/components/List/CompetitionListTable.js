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
  }
  
  render(){
    return (
        <CompetitionListUI 
          show={this.props.show}
          allList={this.props.competitionAllList}
          personalList={this.props.competitionList}
          showEachRankList={this.props.showEachRankList}
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
    showEachRankList(e){
      dispatch(actionCreators.showEachRankList(e.currentTarget.id))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);