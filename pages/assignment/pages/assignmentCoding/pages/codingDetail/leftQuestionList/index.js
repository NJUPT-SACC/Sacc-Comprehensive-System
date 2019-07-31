import React from "react";
import { connect } from 'react-redux'
import { actionCreators } from "../../../../../store";

import './index.less'

class QuestionList extends React.Component {
  constructor(props){
    super(props)
  }
  transformBack () {
    this.props.changeListDisplay(false);
  }
  render() {
    const { showQuestionList, questionList } = this.props;
    console.log(questionList);
    return (
      <div
        className="left_questionList"
        style={{
          transform: showQuestionList ? 'translateX(0)' : 'translateX(-100%)'
        }}
      >
        <div className="list_title_container">
          <div className="list_left">
            <span className="iconfont">&#xe839;</span>
            <span>题目列表</span>
          </div>
          <div className="transformBack">
            <span
              className="iconfont"
              onClick={() => {this.transformBack()}}
            >&#xe75a;</span>
          </div>
        </div>
        <main className="question_list_container">
          {
            questionList ?
              questionList.map(item => {
                return (
                  <div className="question_item_wrapper">
                    <div className="item_left">
                      <span className="item_id">{item.id}</span>
                      <span className="item_title">{item.title}</span>
                    </div>
                    <span >{item.difficulty}</span>
                  </div>
                )
              })
              :
              <div>加载中，请稍后</div>
          }
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionList: state.assignment.questionList,
  showQuestionList: state.assignment.showQuestionList
});

const mapDispatchToProps = dispatch => ({
  changeListDisplay (isShow) {
    return dispatch(actionCreators.onChangeListDisplay(isShow))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)