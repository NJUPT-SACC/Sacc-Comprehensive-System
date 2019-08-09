import React from 'react'
import { connect } from 'react-redux'
import {actionCreators} from "../../../../../../store";

import './index.less'

class FooterMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  /* 显示左侧的题目列表 */
  showQuestionList () {
    this.props.changeListDisplay(true);
  }
  
  /* 切换题目 （上一题，下一题） */
  handleSwitchQuestion (e) {
    const { questionId } = this.props;
    switch (e.target.innerText) {
      case '上一题':
        this.props.switchQuestion( questionId - 1 )
      case '下一题':
        this.props.switchQuestion( questionId + 1 )
    }
  }
  
  render() {
    const { questionId, currentQuestionType, questionList } = this.props;
    return (
      <div className="footer_menu">
        <div className="left_part">
          <div className="question_list">
            <span onClick={() => { this.showQuestionList() }}>
              <span className="iconfont">&#xe839;</span>
              题目列表
            </span>
          </div>
          {
            currentQuestionType === '编程题' ?
              <div className="switch_question">
                <span>
                  {parseInt(questionId) + 1 } / { questionList !== null ? questionList.length : 0 }
                </span>
                <span onClick={(e) => {this.handleSwitchQuestion(e)}}>上一题</span>
                <span onClick={(e) => {this.handleSwitchQuestion(e)}}>下一题</span>
              </div> : <div />
          }
        </div>
        <div className="right_part">
          <div style={{order: 10}}>
            <div className="save_code">
              <span><span className="iconfont">&#xe62e;</span>保存</span>
            </div>
          </div>
          {
            currentQuestionType === '编程题' ?
              <div style={{order: 5}}>
                <div className="execute_code">
                  <span><span className="iconfont">&#xe625;</span>执行代码</span>
                </div>
                <div className="submit_code">
                  <span><span className="iconfont">&#xe69f;</span>提交</span>
                </div>
              </div>
              : <div />
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questionList: state.assignment.questionList,
  currentQuestionType: state.assignment.currentQuestionType
});
const mapDispatchToProps = dispatch => ({
  changeListDisplay (isShow) {
    return dispatch(actionCreators.onChangeListDisplay(isShow))
  },
  switchQuestion (targetQuestionId) {
    return dispatch(actionCreators.onGetQuestionDisc(targetQuestionId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterMenu)