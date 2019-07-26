import React from 'react';
import '../less/login.less'
import List from './List';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showInputBox:false,
      showSys:false,
      userName:'',
      Password:'',
      IfLogin:''
    }
    this.LoginRef = React.createRef();
  }

  changeShowButton = () => {
    this.setState({
      showInputBox:true,
      IfLogin:'登录'
    })
  }

  changeInputColor = (e) =>{
    console.log(e.target.name)
    switch(e.target.name){
      case 'userName':
        this.setState({
          userName: e.target.value
        })
        break;
      case 'password':
        this.setState({
          Password: e.target.value
        })
        break;
    }
    e.target.value ?  e.target.className='LoginInputActive': e.target.className=""
  }

  login = () =>{
    this.LoginRef.current.classList.add("LoginNarrow");
    const self = this;
    setTimeout(function(){
      self.setState({
        showSys:true
      })
    }, 1100)
  }

  ifLogin = (e) => {
    if(e.target.innerText)
      this.setState({
        IfLogin:e.target.innerText
      })
  }


  render(){
    return(
      <div className="Home">
      {
        this.state.showSys ? <List /> :
        <div className="HomeLogin" ref={this.LoginRef}>
          <div className="HomeLoginCaption">
            { 
              this.state.showInputBox ? 
              <div>
                <div className="HomeLoginBox">
                  <p id="LoginLabel" onClick={this.ifLogin}>登录</p>
                  <p id="registeredLabel" onClick={this.ifLogin}>注册</p>
                </div>
              </div>
            : 
            <div>
              <p>计软网安院科协比赛系统</p>
              <button onClick={this.changeShowButton} id="beginBtn">开始使用</button>
            </div>
            }

            {
              this.state.IfLogin == '登录'?                
              <div className="LoginInput">
                <input type="text" placeholder="用户名" onChange={this.changeInputColor} value={this.state.userName} name="userName"/>
                <input type="password" placeholder="密码" onChange={this.changeInputColor} value={this.state.Password} name="password"/>
                <button id="HomeLogin" onClick={this.login}>登录</button>
              </div>
              :this.state.IfLogin == '注册'?
              <div className="re">
                <input type="text" placeholder="用户名" onChange={this.changeInputColor} value={this.state.userName} name="userName"/>
                <input type="password" placeholder="密码" onChange={this.changeInputColor} value={this.state.Password} name="password"/>
              </div>:''
            }
          </div>
      </div>
    }
    </div>
    )
  }
}

export default Login