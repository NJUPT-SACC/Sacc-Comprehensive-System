import React from 'react'

import './index.less'

class CubeItem  extends React.Component{
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div
        className="positioner"
        onClick={(e) => {this.props.transformMatrix(e)}}
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
      categories: ["前端开发组", "后端开发组", "算法组", "python组", "游戏组"],
      current: ''
    };
    this.cubeAssembly = React.createRef();
  }

  transformCube (e) {
    const { current } = this.cubeAssembly;
    Array.from(current.children).map(item => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
    });
    e.target.parentNode.parentNode.classList.add("active");
    this.setState({
      current: e.target.parentNode.parentNode.title
    })
  }

  render () {
    return (
      <div className="container">
        <div className="assembly" ref={this.cubeAssembly}>
          {
            this.state.categories.map(item => {
              return (
                <CubeItem
                  key={item}
                  catename={item}
                  transformMatrix={(e) => {this.transformCube(e)}}
                  isCurrent={this.state.current}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Cube