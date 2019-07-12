import React, { Component } from 'react'

// 样式
import './index.less'

class SideBar extends Component{

  constructor (props) {
    super(props);
    this.state = {
      currentTab: 'JavaScript'
    }
  }

  render () {
    const languageList = [
      {
        logoUrl: '/static/assets/java-script.png',
        language: '前端开发组'
      }, {
        logoUrl: '/static/assets/java.png',
        language: '后端开发组'
      }, {
        logoUrl: '/static/assets/safe.png',
        language: '安全组'
      }, {
        logoUrl: '/static/assets/game.png',
        language: '游戏组'
      }, {
        logoUrl: '/static/assets/algorithm.png',
        language: '算法组'
      }, {
        logoUrl: '/static/assets/python.png',
        language: 'Python组'
      },
    ];
    return (
      <div className="sideBar">
        <header className="logo"><span>S</span>ACC</header>
        <main className="language-list">
          {
            languageList.map(item => {
              return (
                <div
                  className="language-item"
                  key={item.language}
                  onClick={(e) => {this.handleLanguageSwitch(e)}}
                >
                  <div className="imgBox">
                    <img src={item.logoUrl} alt=""/>
                  </div>
                  <span className="language">{item.language}</span>
                  <span className="selected" style={{visibility: `${item.language === this.state.currentTab ? 'visible' : 'hidden'}`}}/>
                </div>
              )
            })
          }
        </main>
      </div>
    )
  }

  handleLanguageSwitch (e) {
    console.log(e.target.innerText);
    this.setState({
      currentTab: e.target.innerText
    })
  }
}

export default SideBar