import React from 'react';
import '../less/login.less'
import List from './List';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';
import { message } from 'antd';
class Login extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      showInputBox:false,
      showSys:false,
      userName:'',
      Password:'',
      targetLogin:'',
      unregisteredUserName:'',
      unregisteredPassword:'',
      unregisteredMail:'',
      flag:false,
      show:false,
      finishRegistered:false
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
        targetLogin:'登录',
        show:true
      })
    },500)
  }
  getValue = (e) => {
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
      case 'unregisteredUserName':
        this.setState({
          unregisteredUserName: e.target.value
        })
        if(e.target.value.length>16){
          message.warning('用户名只能输入16位噢~')
          e.target.className='err'
          return e.returnValue = false
        }
        break;
      case 'unregisteredPassword':{
        this.setState({
          unregisteredPassword: e.target.value
        })
        if(e.target.value.length>16){
          message.warning('密码只能输入16位噢~')
          e.target.className='err'
        }
        break;
      }
      case 'unregisteredMail':
        this.setState({
          unregisteredMail: e.target.value
        })
        break;
    }
  }
  changeInputColor = async (e) =>{
    e.target.value ?  e.target.className='LoginInputActive': e.target.className="";
    await this.getValue(e);
    if(this.state.unregisteredUserName.length<=16 && this.state.unregisteredPassword.length<=16 && 
      this.state.unregisteredUserName.length>0 && this.state.unregisteredPassword.length>0 &&
      this.state.unregisteredMail.match('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$') ){
      this.setState({
        finishRegistered: true
      })
    }else{
      this.setState({
        finishRegistered: false
      })
    }
  }
  login =  async () =>{
    await this.props.IfLogin(this.state.userName, this.state.Password,this.LoginRef)
    this.props.showBlist()
    const self = this;
    setTimeout(function(){
      self.setState({  
        showSys: true
      })
    }, 1100)
  }
  
  unregistered = async () => {
    await this.props.registered(this.state.unregisteredUserName, this.state.unregisteredPassword, this.state.unregisteredMail)
    this.login(this.state.unregisteredUserName, this.state.unregisteredPassword)
  }
  errUnregistered = () => {
    this.state.unregisteredMail && !this.state.unregisteredMail.match('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')?
      message.error('邮箱格式不对噢~！')
      :this.state.unregisteredUserName.length>16 &&this.state.unregisteredUserName.length >0?
        message.error('不可以叫这么长的名字噢~')
      :this.state.unregisteredPassword.length>16 &&this.state.unregisteredPassword.length >0?
        message.error('就算是密码 也不能输这么长噢~'):
        message.warning('不要调皮噢~不然就注册不了啦~')
  }
  showLogin = (e) => {
    this.setState({
      show:false
    })
    if(e.target.innerText){
      e.target.innerText === '登录'?
        this.setState({
          flag:true
        }):          
        this.setState({
          flag:false
        })
      const self =this;
      const innerText = e.target.innerText;
      setTimeout(function(){
        self.setState({
          targetLogin:innerText
        })
      },300)

    }
  }
  
  changeAnimation = () => {
    if(this.state.show){
      return  {animation: 'HomeslideOut .8s forwards linear'}
    }else{
      if(this.state.flag){
        return {animation: 'HomeslideUp .3s forwards linear'}
      }else{
        return {animation: 'HomeslideBottom .3s forwards linear'}
      }
    }
  }

  
  
  render(){
    return(
      <div className="Home">
      {
        (()=>{
          if(this.props.authKey){
            if(this.state.showSys){
              return (<List />)
            }
          }else{
            return(
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
                  <div className="LoginInput"
                    style={this.changeAnimation()}>
                    <input
                      type="text" 
                      placeholder="用户名" 
                      onChange={this.changeInputColor} 
                      value={this.state.userName} 
                      name="userName"
                      key="0"
                      maxLength="17"
                    />
                    <input 
                      type="password" 
                      placeholder="密码" 
                      onChange={this.changeInputColor} 
                      value={this.state.Password} 
                      name="password"
                      key="1"
                      maxLength="17"
                    />
                    <button id="HomeLogin" onClick={this.login}>登录</button>
                  </div>
                  :this.state.targetLogin == '注册'?
                  <div className="unregisteredInput"
                  style={this.state.flag?
                    {animation: 'HomeslideBottom .3s forwards linear'}
                    :
                    {animation:'HomeslideUp .3s forwards linear'}}>
                    <input 
                      type="text" 
                      placeholder="用户名" 
                      onChange={ this.changeInputColor } 
                      value={ this.state.unregisteredUserName } 
                      name="unregisteredUserName"
                      autoComplete="off"
                      key="2"
                      maxLength="17"
                    />
                    <input 
                      type="text" 
                      placeholder="邮箱" 
                      onChange={ this.changeInputColor } 
                      value={ this.state.unregisteredMail } 
                      name="unregisteredMail"
                      autoComplete="off"
                      key="3"
                    />
                    <input 
                      type="password" 
                      placeholder="密码" 
                      onChange={this.changeInputColor} 
                      value={this.state.unregisteredPassword} 
                      name="unregisteredPassword"
                      key="4"
                      maxLength="17"
                    />
                    <p>
                      {
                        this.state.finishRegistered ?
                        <img onClick={this.unregistered}src='https://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%B7%A6%E7%AE%AD%E5%A4%B4.png' />:
                        <img onClick={this.errUnregistered} src={'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%94%99%E8%AF%AF.png' } />
                      }
                    </p>
                  </div>
                  :''
                }
              </div>
          </div>
            )
          }
        })()
    }
    </div>
    )
  }
}


const mapStateToProps = (state) =>{
  	return {
    BasicInformationList: state.home.BasicInformationList,
    registeredStatus: state.home.registeredStatus,
    registeredMsg: state.home.registeredMsg,
    loginMsg: state.home.loginMsg,
    authKey: state.home.authKey
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		IfLogin(userName,password,LoginRef){
      dispatch(actionCreators.Login(userName,password,LoginRef));
    },
    showBlist(){
      dispatch(actionCreators.BasicInformation())
    },
    registered(unregisteredName,unregisteredPassword,unregisteredMail){
      dispatch(actionCreators.Registered(unregisteredName,unregisteredPassword,unregisteredMail))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
