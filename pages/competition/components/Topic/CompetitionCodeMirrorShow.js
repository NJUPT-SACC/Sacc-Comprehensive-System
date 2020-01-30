import React from 'react';
import { connect } from 'react-redux';
import { actionCreators,store } from '../../store';

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'

class CompetitionCodeMirror extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <CodeMirror
        options={ this.props.codeMirrorOptions }
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
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionCodeMirror);