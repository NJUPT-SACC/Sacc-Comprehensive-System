import React from 'react'
import { connect } from 'react-redux'

// 样式
import './index.less'

class SubContent extends React.Component {

  constructor (props) {
    super (props);
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
  currentColor: state.getIn(["assignment", "currentColor"])
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(SubContent)