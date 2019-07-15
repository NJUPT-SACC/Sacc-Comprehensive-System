import React from 'react'
import Prism from '../../prism.js';
import CanvasComponent from './components/canvas'
import '../../style/prism.css'

// 样式
import './index.less'

// 页面
import EditorCode from './components/editorCode'
import SubContent from './components/subContent'

class Content extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      editorList: [
        {
          className: "language-php",
          code: `function writeMsg() {\n    echo "Hello world!";\n}\n\nwriteMsg(); // call the function`,
          language: "php"
        }, {
          className: "language-java",
          code: `void Swap(int a, int b) {\n    int temp;\n    temp = a;\n    a = b;\n    b = temp;\n}`,
          language: "Clike"
        }, {
          className: "language-python",
          code: `#!/usr/bin/python\n# -*- coding: UTF-8 -*-\nimport time;  # 引入time模块\nticks = time.time()\nprint "当前时间戳为:", ticks`,
          language: "Python"
        }, {
          className: "language-go",
          code: `package main\nimport "fmt"\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
          language: "Go"
        }, {
          className: "language-java",
          code: `class Sacc {\n   public static void main(String[] args) {\n      System.out.println("Hello World");\n   }\n}`,
          language: "Java"
        }, {
          className: "language-JavaScript",
          code: `function typefor(o) {\n  return Object.prototype.toString.call(o)\n    .match(/(\\\\w+)\\\\]$/)[1]\n    .toLowerCase();\n}`,
          language: "JavaScript"
        },
      ]
    };
    this.myCanvas = React.createRef();
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  render () {
    return (
      <div className="assign-content">
        <div className="editorComponent">
          {
            this.state.editorList.map(item => {
              return (
                <EditorCode
                  key={item.language}
                  onClick={(e) => {this.props.onHandleEditorClick(e)}}
                  classType={item.className}
                  language={item.language}
                  code={item.code}
                />
              )
            })
          }
        </div>
        <div className="contentComponent">
          <SubContent />
        </div>
        <CanvasComponent />
      </div>
    )
}}

export default Content