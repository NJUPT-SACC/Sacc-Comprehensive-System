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
          showList={this.props.showList}
          allList={this.props.competitionAllList}
          personalList={this.props.competitionList}
          showEachRankList={this.props.showEachRankList}
          showPages={this.props.showPages.bind(this)}
        />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionList:state.competition.competitionList,
    competitionAllList:state.competition.competitionAllList,
    showList:state.competition.showList
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
    showPages(e){
      let page = e.target.innerText == '进行中' ? 'Topic': 'Invitation',
        competitionId = e.target.parentNode.id;
        dispatch(actionCreators.changeShowPages(page,competitionId))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);