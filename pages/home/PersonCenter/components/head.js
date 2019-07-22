import React from 'react';
import '../less/head.less';

class Head extends React.Component{
  render(){
    return (
      <div className="PChead">
        <div className="PCgreenSlide"></div>
        <div className="personHeadLeft">
          <div className="PCimgBox"><img src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png"></img></div>
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