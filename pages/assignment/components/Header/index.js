import React from 'react'

import './index.less'

class Header extends React.Component{

  constructor(props){
    super(props)
  }

  handleSubmitClick (e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <header className="assign-header">
        <div className="search">
          <span className="iconfont search-icon">&#xe636;</span>
          <input type="text" className="assign-search" placeholder="Search in "/>
        </div>
        <div className="assign-button">
          <button onClick={(e) => {this.handleSubmitClick(e)}}>Log In</button>
          <button onClick={(e) => {this.handleSubmitClick(e)}}>Sign Up</button>
        </div>
      </header>
    )
  }
}

export default Header