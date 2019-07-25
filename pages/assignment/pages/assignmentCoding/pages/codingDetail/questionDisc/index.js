import React from 'react'
import { connect } from 'react-redux'
import { actionCreators, constants } from '../../../../../store'

import './index.less'

class QuestionDisc extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      usageLang: ''
    }
  }
  componentWillReceiveProps(nextProps, nextContext) {
    const langArr = constants.categories.filter(item => {
      return item.english === nextProps.param;
    });
    this.setState({
      usageLang: typeof langArr[0].lang !== 'undefined' ? langArr[0].lang: []
    }, () => {
      this.props.getQuestionDisc(this.state.usageLang);
    })
  }

  render () {
    return (
      <div className="question_disc">
        <div className="disc_inner_container" >
          <p className="question_disc">
            <span className="iconfont">&#xe652;</span>
            题目描述
          </p>
          <div className="question_content">
            {
              this.props.questions.map(item => {
                return (
                  <div>{item.disc}</div>
                )
              })
            }
          </div>
          <div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  questions: state.getIn(["assignment", "questions"])
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionDisc (langArr) {
    dispatch(actionCreators.onGetQuestionDisc(langArr))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDisc);