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
      questionId: 0,
      questionType: ''
    }
  }
  componentDidMount() {
    const questionId = utli.getUrlParam("id");
    const type = decodeURIComponent(utli.getUrlParam("type"));
    this.setState({
      questionId,
      questionType: type
    })
  }
  
  render () {
    const { questionId, questionType } = this.state;
    return (
      <div className="coding_detail_container">
        {
          questionType === '' ?
            <div>加载中，请稍后</div>
            : questionType === '编程题' ?
            <Programming questionId={questionId}/> :
            <Selection questionId={questionId}/>
        }
      </div>
    )
  }
}

export default Detail