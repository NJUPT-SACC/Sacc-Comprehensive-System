import React from 'react'

// 样式
import './index.less'

class SubContent extends React.Component {
  render () {
    return (
      <div className="sub-content">
        <div>
          <span className="title">SACC</span>
          <sub className="assignment-platform">Assignment Platform</sub>
        </div>
      </div>
    )
  }
}

export default SubContent