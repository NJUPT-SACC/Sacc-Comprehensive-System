import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

import './index.less'

class FooterMenu extends React.Component {wda
  constructor (props) {
    super(props);
    this.state = {
      questionList: []
    }
  }
  
  componentDidMount () {
    const questionList = localStorage.getItem("questionList");
    this.setState({
      questionList: JSON.parse(questionList)
    })
  }
  showQuestionList () {
  
  }
  render() {
    const { questionId } = this.props;
    const { questionList } = this.state;
    return (
      <div className="footer_menu">
        <div className="left_part">
          <div className="question_list">
            <span onClick={() => { this.showQuestionList() }}>
              <span className="iconfont">&#xe839;</span>
              题目列表
            </span>
          </div>
          <div className="switch_question">
            <span>
              {parseInt(questionId) + 1 } / { questionList !== null ? questionList.length : 0 }
            </span>
            <span>上一题</span>
            <span>下一题</span>
          </div>
        </div>
        <div className="right_part">
          <div className="execute_code">
            <span><span className="iconfont">&#xe625;</span>执行代码</span>
          </div>
          <div className="submit_code">
            <span><span className="iconfont">&#xe69f;</span>提交</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, null)(FooterMenu)