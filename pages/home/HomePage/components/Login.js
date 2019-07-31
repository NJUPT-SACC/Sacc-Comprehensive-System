import React from 'react';
import '../less/login.less'
import List from './List';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';

class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showInputBox:false,
      showSys:false,
      userName:'admin',
      Password:'123',
      targetLogin:''
    }
    this.LoginRef = React.createRef();
    this.beginRef = React.createRef();
  }

  changeShowButton = () => {
    this.beginRef.current.classList.add('Home-beginAnimation');
    const self = this;
    setTimeout(function(){
      self.setState({
        showInputBox:true,
        targetLogin:'登录'
      })
    },500)
  }

  changeInputColor = (e) =>{
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
    this.props.IfLogin(this.state.userName, this.state.Password)
    this.props.showBlist()
      this.LoginRef.current.classList.add("LoginNarrow");
      const self = this;
      setTimeout(function(){
        self.setState({
          showSys: true
        })
      }, 1100)
  }

  showLogin = (e) => {
    if(e.target.innerText)
      this.setState({
        targetLogin:e.target.innerText
      })
  }

  render(){
    const { loginStatus }  = this.props;
    return(
      <div className="Home">
      {
        loginStatus === 5002 && this.state.showSys? 
        <List />:
        <div className="HomeLogin" ref={this.LoginRef}>
          <div className="HomeLoginCaption">
            { 
              this.state.showInputBox ? 
                <div className="HomeLoginBox">
                  <p 
                  onClick={this.showLogin} 
                  className={this.state.targetLogin === '登录'? 'LoginActive': ''}
                  >
                    登录
                  </p>
                  <p 
                  onClick={this.showLogin}
                  className={this.state.targetLogin === '注册'? 'LoginActive': ''}
                  >
                    注册
                  </p>
                </div>
            : 
            <div ref = { this.beginRef } className="HomeBegin">
              <p>SACC 比赛系统</p>
              <button onClick={this.changeShowButton}  id="beginBtn">开始使用</button>
            </div>
            }

            {
              this.state.targetLogin == '登录'?                
              <div className="LoginInput">
                <input 
                  type="text" 
                  placeholder="用户名" 
                  onChange={this.changeInputColor} 
                  value={this.state.userName} 
                  name="userName"
                />
                <input 
                  type="password" 
                  placeholder="密码" 
                  onChange={this.changeInputColor} 
                  value={this.state.Password} 
                  name="password"
                />
                <button id="HomeLogin" onClick={this.login}>登录</button>
              </div>
              :this.state.targetLogin == '注册'?
              <div className="re">
                <input 
                  type="text" 
                  placeholder="用户名" 
                  onChange={ this.changeInputColor } 
                  value={ this.state.userName } 
                  name="userName"
                />
                <input 
                  type="password" 
                  placeholder="密码" 
                  onChange={this.changeInputColor} 
                  value={this.state.Password} 
                  name="password"
                />
              </div>
              :''
            }
          </div>
      </div>
    }
    </div>
    )
  }
}


const mapStateToProps = (state) =>{
	return {
    loginStatus: state.home.loginStatus,
    BasicInformationList: state.home.BasicInformationList
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		IfLogin(userName,password){
      dispatch(actionCreators.Login(userName,password));
    },
    showBlist(){
      dispatch(actionCreators.BasicInformation())
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
