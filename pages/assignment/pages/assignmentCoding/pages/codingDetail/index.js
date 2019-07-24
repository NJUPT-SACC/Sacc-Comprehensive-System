import React from 'react'
import Util from '../../../../utli/utli'

import MonacoEditor from '../../../../../components/editor/editor'
import QuestionDisc from './questionDisc'
import FooterMenu from './footerMenu'

import './index.less'

const utli = new Util();

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
      }
    }
  }

  componentDidMount() {
    this.setState({
      param: utli.getUrlParam("type")
    });
  }

  render () {
    return (
      <div>
        <div className="assignment_coding">
          <QuestionDisc
            param={this.state.param}
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
        <FooterMenu />
      </div>
    )
  }
}

export default Detail