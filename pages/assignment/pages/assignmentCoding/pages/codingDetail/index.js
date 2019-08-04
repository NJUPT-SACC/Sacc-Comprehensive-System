import React from 'react'
import { connect } from 'react-redux'
import Utli from "../../../../utli/utli";
import Programming from './programmingQuestion'
import Selection from './selectionQuestion'

import './index.less'

const utli = new Utli();

class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      param: "",
      questionId: 0
    }
  }
  
  componentDidMount() {
    const questionId = utli.getUrlParam("id");
    this.setState({
      questionId
    })
  }
  
  render () {
    const { questionId } = this.state;
    const { currentQuestionType } = this.props;
    return (
      <div className="coding_detail_container">
        {
          currentQuestionType === '' ?
            <div>加载中，请稍后</div>
            : currentQuestionType === '编程题' ?
            <Programming questionId={questionId}/> :
            <Selection questionId={questionId}/>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentQuestionType: state.assignment.currentQuestionType
});

export default connect(mapStateToProps, null)(Detail)