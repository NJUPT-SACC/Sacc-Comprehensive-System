import React from 'react'

import QuestionDisc from '../components/questionDisc'
import FooterMenu from '../components/footerMenu'
import HeaderMenu from "../components/headerMenu";
import QuestionList from '../components/leftQuestionList'

import './index.less'
import Editor from "../components/editor";

class ProgrammingPage extends React.Component {
  constructor (props) {
    super (props);
  }
  render() {
    const { questionId } = this.props;
    return (
      <div className="programming_container">
        <QuestionList />
        <HeaderMenu questionId={questionId}/>
        <div className="assignment_coding">
          <QuestionDisc questionId={questionId}/>
          <Editor/>
        </div>
        <FooterMenu questionId={questionId}/>
      </div>
    )
  }
}

export default ProgrammingPage