import React from 'react'
import Util from '../../utli/utli'
import MonacoEditor from '../../../components/editor/editor'
let javascript, cpp, csharp, css, html, java, python, less;
if (typeof window !== 'undefined') {
  javascript = require("monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution");
  cpp = require("monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution");
  css = require("monaco-editor/esm/vs/basic-languages/css/css.contribution");
  html = require("monaco-editor/esm/vs/basic-languages/html/html.contribution");
  java = require("monaco-editor/esm/vs/basic-languages/java/java.contribution");
  python = require("monaco-editor/esm/vs/basic-languages/python/python.contribution");
  less = require("monaco-editor/esm/vs/basic-languages/less/less.contribution");
  csharp = require("monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution");
}

const utli = new Util();
import './index.less'

class AssignmentCoding extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      param: "",
      langType: "javascript,python,csharp,html,css,java,cpp",
      theme: 'vs-dark',
      automaticLayout: true
    }
  }
  componentDidMount() {
    this.setState({
      param: utli.getUrlParam("type")
    });
  }

  render () {
    if (this.state.param) {
      console.log(this.state.param);
    }
    return (
      <div className="assignment_coding">
        <MonacoEditor
          language={this.state.langType}
          automaticLayout={true}        /* 默认是 false */
          theme={this.state.theme}      /* 默认是 vs */
          autoIndent={true}
          fontSize={16}                 /* 默认是 14px */
          filenames="index.js"
        />
      </div>
    )
  }
}
export default AssignmentCoding