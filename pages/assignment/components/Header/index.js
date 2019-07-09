import React from 'react'

import './index.less'

class Header extends React.Component{
  render() {
    return (
      <header>
        <div className="search">
          <span className="iconfont">&#xe636;</span>
          <input type="text" placeholder="搜索"/>
        </div>
      </header>
    )
  }
}

export default Header