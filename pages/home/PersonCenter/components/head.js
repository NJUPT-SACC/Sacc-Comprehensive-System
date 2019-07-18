import React from 'react';
import '../less/head.less';

class Head extends React.Component{
  render(){
    return (
      <div className="head">
        <div className="personHeadLeft">
          <div className="imgBox"><img src="https://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/QQ%E5%9B%BE%E7%89%8720190717144749.png"></img></div>
          <div className="des">
            <p>ouu21456897123</p>
            <span className="groupName">前端组</span>
            <span className="des">打字员打字员</span>
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