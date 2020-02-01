import React from 'react';
import { connect } from 'react-redux';
import { actionCreators,store } from '../../store';

import { CompetitionInvitationUI } from '../../containers/Invitation/index'

class CompetitionInvitation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      teammateA:'',
      teammateB:''
    }
  }
  
  submitInvitation(e){

  }

  getTeammate(e){
    e.target.name === 'A'?
      this.setState({
        teammateA:e.target.value
      }) :
      this.setState({
        teammateB:e.target.value
      })
  }

  render(){
    return (
      <CompetitionInvitationUI
        submitInvitation={this.submitInvitation}
        teammateA={this.state.teammateA}
        teammateB={this.state.teammateB}
        getTeammate={this.getTeammate.bind(this)}
        competitionName={this.props.competitionAllList[this.props.competitionTopicId].name}
        back={this.props.back}
      />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionAllList:state.competition.competitionAllList,
    competitionTopicId:state.competition.competitionTopicId
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    back(){
      dispatch(actionCreators.changeShowPages('List'))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionInvitation);