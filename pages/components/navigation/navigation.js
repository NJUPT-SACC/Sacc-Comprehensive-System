// 导航入口： 
// 1. 左：logo 中：空白 右： 比赛系统 练习系统 个人中心 登录
// 2. 登录 根据状态变成退出登录字样

import './navigation.less';
import React from 'react';
import Link from 'next/link';
import imag from "./imgs/logo.png";
import Router from 'next/router';

class Navigation extends React.Component{
  state = {
    LoginVisible: false,
    RegisteredVisible: false,
    authkey:true,
  };

  setLoginVisible(LoginVisible) {
    this.setState({ LoginVisible });
  }

  setRegisteredVisible(RegisteredVisible) {
    this.setState({ RegisteredVisible });
  }

  judge(){
    if(!this.state.authkey){
      return (<Link className="login" href="/loginPage"><div className="item">登录</div></Link>);
    }
    else{
    localStorage.clear();
    document.cookie="authkey=''";
     setTimeout(() => {
      Router.push('/')
    }, 100);
    return (<Link className="logout" href="/home"><div className="item">退出登录</div></Link>);
    }
   
  }

  render(){
    return(
      <div className="container">
                   <div className="left split"><Link href="/home"><img src={imag}/></Link></div>
                   <div className="middle split"></div>
                   <div className="right split">
                        <Link className="competition" href="/competition">
                          <div className="item">比赛系统</div>
                        </Link>
                        <Link className="practice" href="/practice">
                          <div className="item">练习系统</div>
                        </Link>
                        <Link className="personalCenter" href="/personalCenter">
                        <div className="item">个人中心</div>
                        </Link>

                        {this.judge()}
                        
                  </div>
      </div>
    );
    
  }

}

export default Navigation

