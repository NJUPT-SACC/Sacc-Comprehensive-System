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
            backgroundNameOne:'',
            backgroundNameTwo:'',
            oneValue:'',
            twoValue:'',
            uesrName: '',
            password: ''
        }
    }
    valueChangeOne(e){
        this.setState({
            oneValue:e.target.value
        })
        if(e.target.value =='')
        {
            this.setState({
                backgroundNameOne :'backgroundWhite'
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                backgroundNameOne : 'backgroundBlue'
            })
        }
    }
    valueChangeTwo(e){
        this.setState({
            twoValue:e.target.value
        })
        if(e.target.value =='')
        {
            this .setState({
                backgroundNameTwo :'backgroundWhite'
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                backgroundNameTwo : 'backgroundBlue'
            })
        }
    }
    click_log(){
        if(this.state.oneValue == '' || this.state.twoValue =='')
        {
            alert("输入有误");
        }
        else{
            this.setState({
                            uesrName: this.state.oneValue, 
                            password: this.state.twoValue
            });
        }
    }/*存入state 以及输入内容的筛选*/
    render(){
        return(
            <div>
                <span>账号:</span><input value={this.state.oneValue} className={this.state.backgroundNameOne} onChange= {this.valueChangeOne.bind(this)}/>
                <br/>
                <br/>
                <span>密码:</span><input  value={this.state.twoValue} className={this.state.backgroundNameTwo}  type="password" onChange={this.valueChangeTwo.bind(this)} />
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
            backgroundNameOne :'',
            backgroundNameTwo:'',
            backgroundNameThree: '',
            oneValue:'',
            twoValue:'',
            threeValue:'',
            userName: '',
            password: '',
            mail: '',
        }
    }
    valueChangeOne(e){
            this.setState({
                oneValue:e.target.value
            })
        if(e.target.value =='')
        {
            this.setState({
                backgroundNameOne :'backgroundWhite',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                backgroundNameOne : 'backgroundBlue'
            })
        }
    }/*第一个框*/
    valueChangeTwo(e){
        this.setState({
            twoValue:e.target.value
        })
        if(e.target.value =='')
        {
            this.setState({
                backgroundNameTwo :'backgroundWhite',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                backgroundNameTwo : 'backgroundBlue'
            })
        }
    }/*第二个框 */
    valueChangeThree(e){
        this.setState({
            threeValue:e.target.value
        })
        if(e.target.value =='')
        {
            this.setState({
                backgroundNameThree :'backgroundWhite',
            })
        }
        else if(e.target.value != '')
        {
            this .setState({
                backgroundNameThree : 'backgroundBlue'
            })
        }
    }/*第三个框*/

    click_register(){
        if(this.state.oneValue == '' || this.state.twoValue =='' || this.state.threeValue== '')
        {
            alert("输入有误");
        }
        else{
            this.setState({
                userName: this.state.oneValue,
                password: this.state.twoValue,
                mail: this.state.threeValue
            })
        }
    }/*存入state 以及输入内容的筛选*/
    render(){
        return(
            <div>
                <span>账号:</span><input className={this.state.backgroundNameOne}  onChange= {this.valueChangeOne.bind(this)}/>
                <br/>
                <br/>
                <span>密码:</span><input className={this.state.backgroundNameTwo} type="password"  onChange= {this.valueChangeTwo.bind(this)}/>
                <br/>
                <br/>
                <span>邮箱:</span><input className={this.state.backgroundNameThree}  onChange= {this.valueChangeThree.bind(this)}/>
                <br/><br/>
                <button onClick={this.click_register.bind(this) } className="Registerbox-btn">注册</button>
            </div>
        )
    }
}

class Box extends Component{
    constructor(props,context) {
        super(props,context);
        this.state = {
            display_num: '1',
        }
    }
    display_change() {
                    if(this.state.display_num === '1')
                    {
                        this.setState({
                            display_num: '0'
                        })
                    }
                    else{
                        this.setState({
                            display_num:'1'
                        })
                    }
        }
    
render(){
    if(this.state.display_num === '1')
    {
        return<div>
                <Logbox/>
                <button onClick={this.display_change.bind(this)} className="Box-switch_btn">登录/注册</button>
            </div>
    }
    else{
        return<div>
                <Registerbox/>
                <button onClick={this.display_change.bind(this) }  className="Box-switch_btn">登录/注册</button>
            </div>
    }
}
}

/*登录和注册界面 以及切换效果*/

export {Box};

