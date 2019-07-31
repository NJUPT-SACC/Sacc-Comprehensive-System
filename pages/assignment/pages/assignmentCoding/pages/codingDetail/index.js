import React from 'react'

import Utli from "../../../../utli/utli";
import MonacoEditor from '../../../../../components/editor/editor'
import QuestionDisc from './questionDisc'
import FooterMenu from './footerMenu'
import HeaderMenu from "./headerMenu";
import QuestionList from './leftQuestionList'

import './index.less'

const utli = new Utli();

class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      param: "",
      langType: "javascript,python,csharp,html,css,java,cpp",
      theme: 'vs-dark',
      automaticLayout: true,
      scrollbar: {
        arrowSize: 6,
        verticalScrollbarSize: 6,
        horizontalSliderSize: 6
      },
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
    return (
      <div className="coding_detail_container">
        <QuestionList />
        <HeaderMenu
          questionId={questionId}
        />
        <div className="assignment_coding">
          <QuestionDisc
            questionId={questionId}
          />
          <MonacoEditor
            language={this.state.langType}
            automaticLayout={true}        /* 默认是 false */
            theme={this.state.theme}      /* 默认是 vs */
            autoIndent={true}
            fontSize={16}                 /* 默认是 14px */
            filenames="index.js"
            scrollBeyondLastLine={false}  /* 是否在最后一行下面还可以滚动一屏的距离， 默认是 false */
            scrollbar={this.state.scrollbar}
          />
        </div>
        <FooterMenu
          questionId={questionId}
        />
      </div>
    )
  }
}

export default Detail