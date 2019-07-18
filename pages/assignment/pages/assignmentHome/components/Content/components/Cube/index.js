import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { actionCreators } from '../../../../../../store'

import './index.less'

class CubeItem  extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      nodeArray: [""]
    }
  }

  transformMatrix (e) {
    const { title } = e.target.parentNode.parentNode;
    const currentColor = window.getComputedStyle(ReactDOM.findDOMNode(e.target)).getPropertyValue("background-color");
    const assembly = e.target.parentNode.parentNode.parentNode;
    Array.from(assembly.children).map(item => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    e.target.parentNode.parentNode.classList.add("active");
    this.props.transformMatrix(title, currentColor)
  }

  render() {
    return (
      <div
        className="positioner"
        onClick={(e) => {this.transformMatrix(e)}}
        title={this.props.catename}
      >
        <div className="prism">
          <div className="prism__face" />
          <div className="prism__face" />
          <div className="prism__face" />
          <div className="prism__face" />
          <div className="prism__face" />
          <div className="prism__face" />
        </div>
      </div>
    )
  }
}

class Cube extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      categories: [
        {id: 0, title: "前端开发组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png"},
        {id: 1, title: "后端开发组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/java.png"},
        {id: 2, title: "python组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/python.png"},
        {id: 3, title: "游戏组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E6%B8%B8%E6%88%8F.png"},
        {id: 4, title: "安全组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%AE%89%E5%85%A8.png"},
        {id: 5, title: "算法组", icon: "http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png"}],
    };
  }

  render () {
    return (
      <div className="container">
        <div className="assembly">
          {
            this.state.categories.map(item => {
              return (
                <CubeItem
                  key={item.title}
                  catename={item.title}
                  transformMatrix={(e, color) => {this.props.transformCube(e, color)}}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  transformCube (title, color) {
    dispatch(actionCreators.onSetCurrentTitle(title, color));
  }
});
export default connect(null, mapDispatchToProps)(Cube)