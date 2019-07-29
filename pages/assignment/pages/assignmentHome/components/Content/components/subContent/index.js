import React from 'react'
import { connect } from 'react-redux'
import Router from 'next/router'

// 样式
import './index.less'

class SubContent extends React.Component {

  constructor (props) {
    super (props);

  }

  navigateTo (path) {
    if (true) { /* 登录验证判断 */
      Router.push({
        pathname: `/assignment/coding`
      })
    }
  }
  render () {
    return (
      <div className="sub-content">
        <div className="title">
            <span style={{color: this.props.currentColor}}>SACC</span>作业平台
        </div>
        <div className="intro">
          计软院科协在线练习平台
        </div>
        <div className="coding__button">
          <span
            key={this.props.currentTitle}
            className="categories"
            style={{color: this.props.currentColor, textShadow: `0 0 10px ${this.props.currentColor}`}}
          >
            {this.props.currentTitle}
          </span>
          {
            this.props.currentTitle === '' ? '' :
              <span
                  onClick={() => {this.navigateTo(this.props.currentEnglish)}}
                  key={this.props.currentColor}
                  className="start__coding"
                  style={{backgroundColor: this.props.currentColor, boxShadow: `0 0 800px ${this.props.currentColor}`}}
                >
                Start Coding
              </span>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentTitle: state.getIn(["assignment", "currentTitle"]),
  currentColor: state.getIn(["assignment", "currentColor"]),
  currentEnglish: state.getIn(["assignment", "english"]),
});

export default connect(mapStateToProps, null)(SubContent)