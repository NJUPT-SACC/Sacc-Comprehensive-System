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
            <li onClick={() => Router.push('/')}>首页</li>
            <li onClick={() => Router.push('/competition')}>比赛系统</li>
            <li onClick={() => Router.push('/assignment')}>练习系统</li>
            <li onClick={() => Router.push('/personcenter')}>个人中心</li>
            {/* <li onClick={() => this.setLoginVisible(true)}>登录</li>
            <li onClick={() => this.setRegisteredVisible(true)}>注册</li>
            <Modal
            title="登录"
            centered
            visible={this.state.LoginVisible}
            onOk={() => this.setLoginVisible(false)}
            onCancel={() => this.setLoginVisible(false)}
            >
              <input type="text" placeholder="用户名"></input>
              <input type="text" placeholder="密码"></input>
            </Modal>
            <Modal
              title="注册"
              centered
              visible={this.state.RegisteredVisible}
              onOk={() => this.setRegisteredVisible(false)}
              onCancel={() => this.setRegisteredVisible(false)}
            >
              <input type="text" placeholder="用户名"></input>
              <input type="text" placeholder="验证邮箱"></input>
              <input type="text" placeholder="密码"></input>
              <input type="text" placeholder="验证密码"></input>
            </Modal> */}
          </ul>
        </div>
      </div>
    )
  }
}
export default Navigation