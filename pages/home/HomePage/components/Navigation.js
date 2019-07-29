import React from 'react';
import '../less/navigation.less';
import Router from 'next/router';
import { Modal } from 'antd';

class Navigation extends React.Component{
  state = {
    LoginVisible: false,
    RegisteredVisible: false
  };

  setLoginVisible(LoginVisible) {
    this.setState({ LoginVisible });
  }

  setRegisteredVisible(RegisteredVisible) {
    this.setState({ RegisteredVisible });
  }

  render(){
    return (
      <div className="Homenavigation">
        <div className="Homenavigation-left">
          <span>SACC</span>
        </div>
        <div className="Homenavigation-right">
          <ul>
            <li onClick={() => Router.push('/home')}>首页</li>
            <li onClick={() => Router.push('/competition')}>比赛系统</li>
            <li onClick={() => Router.push('/assignment')}>练习系统</li>
            <li onClick={() => Router.push('/personcenter')}>个人中心</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navigation