import React from 'react';
import '../less/head.less';
import { Avatar } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


class Head extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }

  render(){
    return (
      <div className="PChead">
        <div className="PCgreenSlide"></div>
        <div className="personHeadLeft">
        <Avatar style={{ backgroundColor: this.state.color, verticalAlign: 'middle' }} size="large">
          {this.state.user}
        </Avatar>
          <div className="PCDes">
            <p>ouu21456897123</p>
            <span>前端组</span>
            <span>打字员打字员</span>
          </div>
        </div>
        <div className="personHeadRight">
          <button>编辑</button>
          <button>打卡</button>
        </div>
    </div>
    )
  }
}

export default Head