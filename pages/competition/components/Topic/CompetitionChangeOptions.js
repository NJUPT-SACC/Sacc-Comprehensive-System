import React from 'react';
import { connect } from 'react-redux';
import { actionCreators,store } from '../../store';
import { CompetitionCodeMirrorUI } from '../../containers/Topic/index'

class CompetitionChangeOptions extends React.Component{
  constructor(props){
    super(props);
    this.state={
      mode:'C'
    }
  }

  render(){
    return (
      <CompetitionCodeMirrorUI
        changeMode={ this.props.changeMode.bind(this) }
        mode={ this.state.mode }
      />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    codeMirrorOptions:state.competition.codeMirrorOptions
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    changeMode(e){
      let options = this.props.codeMirrorOptions;
      options.mode = e.item.props.children;
      this.setState({
        mode: options.mode
      })
      dispatch(actionCreators.changeOptions(options))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionChangeOptions);