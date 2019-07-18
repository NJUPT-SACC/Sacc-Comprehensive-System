import React from 'react'

import './index.less'

class EditorCode extends React.Component {

  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className="editorCode">
        <header>
          <div className="header-wrapper">
            <div>
              <span className="iconfont">&#xe603;</span>
              <span>{this.props.language}</span>
            </div>
            <span className="iconfont downArrow">&#xe699;</span>
          </div>
        </header>
        <div className="codeContent">
            <pre>
              <code className={this.props.classType} style={{fontSize: '0.95em'}}>
                {
                  this.props.code
                }
              </code>
              <span className="cursor-effect">|</span>
            </pre>
        </div>
      </div>
    )
  }
}

export default EditorCode