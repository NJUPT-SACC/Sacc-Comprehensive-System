import React from 'react';
import '../less/basicInformation.less'

const list = [
  {
    key: 'nic',
    value:'ouu'
  },
  {
    key: 'nic',
    value:'ouu'
  },
  {
    key: 'nic',
    value:'ouu'
  }
  ,  {
    key: 'nic',
    value:'ouu'
  }
]
class BasicInformation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      flag: false,
      nickName: 'ouu',
      name:'张颖',
      studentId:'B18030406',
      group: '前端组',
      mail: '389746410@qq.com',
      college:'计算机学院、软件学院、网络空间安全学院',
      major: '计算机科学与技术',
      grade: '大一'
    }
  }

  Editor =()=>{
    this.setState({
      flag: true
    })
  }

  changeName = (e)=>{
    this.setState({
      name:e.target.value,
      nickName: e.target.value,
      name:e.target.value,
      studentId:e.target.value,
      group: e.target.value,
      mail: e.target.value,
      college:e.target.value,
      major: e.target.value,
      grade:e.target.value
    })
  }

  render(){
    return(
      <div className="BasicInformation">
        <div className="BasicInformationCaption">
          <button onClick={this.Editor}>编辑</button>
        </div>
        <div>
          <dl>
            <dt>昵称</dt>
            <dd>{this.state.flag ? <input value = {this.state.nickName} onChange={this.changeName} />: this.state. nickName}</dd>
          </dl>
          <dl>
            <dt>姓名</dt>
            <dd>{this.state.flag ? <input value = {this.state.name} onChange={this.changeName} />: this.state.name}</dd>
          </dl>
          <dl>
            <dt>学号</dt>
            <dd>{this.state.flag ? <input value = {this.state.studentId} onChange={this.changeName} />: this.state.studentId}</dd>
          </dl>
          <dl>
            <dt>组别</dt>
            <dd>{this.state.flag ? <input value = {this.state.group} onChange={this.changeName} />: this.state.group}</dd>
          </dl>
          <dl>
            <dt>邮箱</dt>
            <dd>{this.state.flag ? <input value = {this.state.mail} onChange={this.changeName} />: this.state.mail}</dd>
          </dl>
          <dl>
            <dt>学院</dt>
            <dd>{this.state.flag ? <input value = {this.state.college} onChange={this.changeName} />: this.state.college}</dd>
          </dl>
          <dl>
            <dt>专业</dt>
            <dd>{this.state.flag ? <input value = {this.state.major} onChange={this.changeName} />: this.state.major}</dd>
          </dl>
          <dl>
            <dt>年级</dt>
            <dd>{this.state.flag ? <input value = {this.state.grade} onChange={this.changeName} />: this.state.grade}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default BasicInformation