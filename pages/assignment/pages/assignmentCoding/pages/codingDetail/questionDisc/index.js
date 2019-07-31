import React from 'react'
import { connect } from 'react-redux'
import { actionCreators, constants } from '../../../../../store'
import Utli from "../../../../../utli/utli";

import './index.less'
const utli = new Utli();

class QuestionDisc extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    const questionId = utli.getUrlParam("id");
    /* 根据题目 id 获取当前题目 */
    this.props.getQuestionDisc(questionId);
  }
  render () {
    const { disc, iStandard, oStandard, IOSample } = this.props.currentQuestion;
    return (
      <div className="question_disc_outer">
        <div className="disc_inner_container">
          <p className="question_disc_inner">
            <span className="iconfont">&#xe652;</span>
            题目描述
          </p>
          <div className="question_content">
           <div className="question_item_disc">{disc}</div>
            <div className="IOStandard">
              <div className="question_item_iStandard">
                <span>输入描述：</span>
                <pre>{iStandard}</pre>
              </div>
              <div className="question_item_oStandard">
                <span>输出描述：</span>
                <pre>{ oStandard }</pre>
              </div>
            </div>
           <div className="IOSample_list">
             {
               typeof IOSample === 'undefined'?
                 <div className="preview_box">
                  <div className="iText">
                    <span/><span/>
                  </div>
                  <div className="oText">
                    <span/><span/>
                  </div>
                 </div> :
                 IOSample.map(item => {
                   return (
                     <div style={{marginBottom: '8px'}} key={item.iSample}>
                       <div className="question_item_iSample">
                         <span>输入样例：</span>
                         <pre>{item.iSample}</pre>
                       </div>
                       <div className="question_item_oSample">
                         <span>输出样例：</span>
                         <pre>{item.oSample}</pre>
                       </div>
                     </div>
                   )
                 })
             }
           </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentQuestion: state.assignment.currentQuestion
  }
};

const mapDispatchToProps = (dispatch) => ({
  getQuestionDisc (questionId) {
    dispatch(actionCreators.onGetQuestionDisc(questionId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDisc);