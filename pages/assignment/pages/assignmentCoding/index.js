import React from 'react'

import CodingHome from './pages/codingHome'
import './index.less'

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

class AssignmentCoding extends React.Component {

  render () {
    return (
      <div className="assignment_coding_container">
        <CodingHome />
      </div>
    )
  }
}
export default AssignmentCoding