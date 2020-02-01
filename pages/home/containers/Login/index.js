// 登录界面：
// 1. 登录框居中显示
// 2. 上面有tag切换 登录注册
// 3. 写好各类条件判断：输入不完整 / 已注册 / 账户名密码错误
// 4. 输入限制
// 5. 输入后input变色
// 6. 获取所有value 
//    存到state: 
//           login:{"uesrName":"","password":""} 
//           unregistered:{"userName":"","password":"","mail":""}
import './index.less';
import { Component } from 'react';
import { render } from 'react-dom';
class Logbox extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            background_colorone :'white',
            background_colortwo:'white',
            uesrName: '',
            password: ''
        }
    }
    changeColorOne(e){
        if(e.target.value =='')
        {
            this.setState({
                background_colorone :'white',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                background_colorone : '#78A5F2'
            })
        }
    }/*第一个框*/
    changeColorTwo(e){
        if(e.target.value =='')
        {
            this .setState({
                background_colortwo :'white',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                background_colortwo : '#78A5F2'
            })
        }
    }/*第二个框*/
    click_log(){
        if(this.dom1.value == '' || this.dom2.value =='')
        {
            alert("输入有误");
        }
        else{
            this.setState({uesrName: this.dom1.value, password :this.dom2.value});
        }
    }/*存入state 以及输入内容的筛选*/
    render(){
        return(
            <div>
                <span>账号:</span><input ref={e => (this.dom1 = e)} onChange={(e)=>this.changeColorOne(e)} style={{background: this.state.background_colorone}}/>
                <br/>
                <br/>
                <span>密码:</span><input type="password" ref={e => (this.dom2 = e)} onChange={(e)=>this.changeColorTwo(e)}  style={{background: this.state.background_colortwo}}/>
                <br/><br/>
                <button onClick={this.click_log.bind(this)}  className="Logbox-btn" >登录</button>
            </div>
        )
    }
}/*登录界面  以及输入框变色*/
class Registerbox extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            background_colorone :'white',
            background_colortwo:'white',
            background_colorthree: 'white',
            userName: '',
            password: '',
            mail: '',
        }
    }
    changeColorOne(e){
        if(e.target.value =='')
        {
            this.setState({
                background_colorone :'white',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                background_colorone : '#78A5F2'
            })
        }
    }/*第一个框*/
    changeColorTwo(e){
        if(e.target.value =='')
        {
            this.setState({
                background_colortwo :'white',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                background_colortwo : '#78A5F2'
            })
        }
    }/*第二个框 */
    changeColorThree(e){
        if(e.target.value =='')
        {
            this.setState({
                background_colorthree :'white',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                background_colorthree : '#78A5F2'
            })
        }
    }/*第三个框*/

    click_register(){
        if(this.dom1.value == '' || this.dom2.value =='' || this.dom3.value == '')
        {
            alert("输入有误");
        }
        else{
            this.setState({uesrName: this.dom1.value, password :this.dom2.value, mail:this.dom3.value});
        }
    }/*存入state 以及输入内容的筛选*/
    render(){
        return(
            <div>
                <span>账号:</span><input ref={e => (this.dom1 = e)} onChange={(e)=>this.changeColorOne(e)} style={{background: this.state.background_colorone}}/>
                <br/>
                <br/>
                <span>密码:</span><input type="password" ref={e => (this.dom2 = e)} onChange={(e)=>this.changeColorTwo(e)}  style={{background: this.state.background_colortwo}}/>
                <br/>
                <br/>
                <span>邮箱:</span><input ref={e => (this.dom3 = e)} onChange={(e)=>this.changeColorThree(e)}  style={{background: this.state.background_colorthree}}/>
                <br/><br/>
                <button onClick={this.click_register.bind(this) } className="Registerbox-btn">注册</button>
            </div>
        )
    }
}

class Box extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            display_log: 'block',
            display_register:'none',
        }
    }
    display_log() {
        if (this.state.display_log == 'block') {
            this.setState({
                display_log: 'none',
                display_register:'block',
            })
        }
        else if (this.state.display_log == 'none') {
            this.setState({
                display_log: 'block',
                display_register:'none'
            })
        }
}/*切换页面*/    
render(){
    return ( 
        <div>
                <div style={{display: this.state.display_log}}>
                <Logbox/>
                <button onClick={this.display_log.bind(this)} className="Box-switch_btn">登录/注册</button>
                </div>

               <div style={{display: this.state.display_register}}>
                <Registerbox/>
                <button onClick={this.display_log.bind(this) }  className="Box-switch_btn">登录/注册</button>
                </div>
        </div>
    );
}
}/*登录和注册界面 以及切换效果*/

export {Box};

