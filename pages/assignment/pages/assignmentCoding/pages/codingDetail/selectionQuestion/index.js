import React from 'react'
import { connect } from 'react-redux'
import HeaderMenu from '../components/headerMenu'
import FooterMenu from '../components/footerMenu'
import { actionCreators } from '../../../../../store'
import Utli from "../../../../../utli/utli";

import './index.less'

const utli = new Utli();

class SelectionPage extends React.Component {
  componentDidMount () {
    const questionId = utli.getUrlParam("id");
    /* 根据题目 id 获取当前题目 */
    this.props.getQuestionDisc(questionId);
  }
  render() {
    const { currentQuestionType, questionId, currentQuestion } = this.props;
    const { choices, disc, id, type } = currentQuestion;
    return (
      <div className="selection_page">
        <HeaderMenu
          questionId={questionId}
        />
        <div className="selection_question_container">
          <div className="question_disc">{disc} ({type === 1 ? '单选' : '多选'})</div>
          <div className="choice_list">
            {
              choices.map( item => {
                return (
                  <div className="choice_item">
                    <span className="choice_name">{item.choice}.</span>
                    <span className="choice_content">{item.content}</span>
                  </div>
                )
              })
            }
          </div>
          <div className="question_button_list">
            <div className="button_container">
              <span>提交</span>
              <span>下一题</span>
            </div>
          </div>
        </div>
        <FooterMenu
          questionId={questionId}
          questionType={currentQuestionType}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentQuestionType: state.assignment.currentQuestionType,
  currentQuestion: state.assignment.currentQuestion
});
const mapDispatchToProps = dispatch => ({
  getQuestionDisc (questionId) {
    dispatch(actionCreators.onGetQuestionDisc(questionId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage)