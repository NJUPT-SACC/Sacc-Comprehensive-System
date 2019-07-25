import React from 'react'

import './index.less'

class Header extends React.Component {
  render() {
    return (
      <div className="coding_header">
        <div className="header_container">
          <div className="header_left">SACC</div>
          <div className="header_center">
            <div className="search_box">
              <input type="text" placeholder="搜索题目序号，内容"/>
              <span className="iconfont search_icon_button">&#xe636;</span>
            </div>
          </div>
          <div className="header_right">
            <div>XXXX</div>
            <div>XXXX</div>
            <div>XXXX</div>
            <div className="avatar" />
          </div>
        </div>
      </div>
    )
  }
}

export default Header