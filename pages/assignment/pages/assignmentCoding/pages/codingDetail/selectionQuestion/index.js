import React from 'react'
import { connect } from 'react-redux'
import HeaderMenu from '../components/headerMenu'
import FooterMenu from '../components/footerMenu'
import { actionCreators } from '../../../../../store'
import Utli from "../../../../../utli/utli";

import './index.less'
import QuestionList from "../components/leftQuestionList";

const utli = new Utli();

class SelectionPage extends React.Component {
  componentDidMount () {
    const questionId = utli.getUrlParam("id");
    /* 根据题目 id 获取当前题目 */
    this.props.getQuestionDisc(questionId);
  }
  getNextQuestion (currentQuestionId) {
    /* 入参是当前题目的id，根据此 id 获取下一个题目 即 id + 1 */
    const { questionId } = this.props,
          questionItems = Array.from(this.questionList.children);
    let currentQuestionAnswer = {},
        ans = "";
    currentQuestionAnswer.id = parseInt(questionId);
    questionItems.map(item => {
      item.children[0].checked ? ans += item.children[1].innerText.split("")[0] : ""
    });
    currentQuestionAnswer.answer = ans;
    this.props.getQuestionDisc(currentQuestionId + 1);
    this.props.setAnswerList(currentQuestionAnswer);
  }
  questionSubmit () {
    console.log("提交");
  }
  render() {
    const { currentQuestionType, questionId, currentQuestion } = this.props;
    const { choices, disc, type } = currentQuestion;
    if (typeof choices !== 'undefined') {
      return (
        <div className="selection_page">
          <QuestionList />
          <HeaderMenu
            questionId={questionId}
          />
          <div className="selection_question_container">
            <div className="question_disc">{disc} ({type === 1 ? '单选' : '多选'})</div>
            <div className="choice_list"  ref={c => this.questionList = c}>
              {
                choices.map( (item, index) => {
                  return (
                    <div className="choice_item" key={(questionId + 1) * (index + 1)}>
                      <input
                        className="choice_type"
                        id={(questionId + 1) * (index + 1)}
                        type={type === 1 ? 'radio' : 'checkbox'}
                        name={questionId}
                      />
                      <label className="choice_label" htmlFor={((questionId + 1) * (index + 1))} >
                        {item.choice + ".   " + item.content}
                      </label>
                    </div>
                  )
                })
              }
            </div>
            <div className="question_button_list">
              <div className="button_container">
                <span onClick={() => {this.questionSubmit()}}>提交</span>
                <span onClick={() => {this.getNextQuestion(questionId)}}>下一题</span>
              </div>
            </div>
          </div>
          <FooterMenu
            questionId={questionId}
            questionType={currentQuestionType}
          />
        </div>
      )
    } else {
      return <div>加载中，请稍后</div>
    }
  }
}

const mapStateToProps = state => ({
  currentQuestionType: state.assignment.currentQuestionType,
  currentQuestion: state.assignment.currentQuestion
});
const mapDispatchToProps = dispatch => ({
  /* 两个参数一个是题目 id，一个是 当前题目的答案 */
  getQuestionDisc (questionId) {
    dispatch(actionCreators.onGetQuestionDisc(questionId))
  },
  setAnswerList (ans = {}) {
    dispatch(actionCreators.onSetAnswerList(ans));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)