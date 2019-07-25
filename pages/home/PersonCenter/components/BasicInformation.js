import React from 'react';
import '../less/basicInformation.less'
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
    switch(e.target.name){
      case 'name':
        this.setState({
          name:e.target.value
        })
        break;
      case 'nickName':
        this.setState({
          nickName:e.target.value
        })
        break;
      case 'studentId':
        this.setState({
          studentId:e.target.value
        })
        break;
      case 'group':
        this.setState({
          group:e.target.value
        })
        break;      
      case 'mail':
        this.setState({
          mail:e.target.value
        })
        break;      
      case 'college':
        this.setState({
          college:e.target.value
        })
        break;      
      case 'major':
        this.setState({
          major:e.target.value
        }) 
        break;     
      case 'grade':
        this.setState({
          grade:e.target.value
        })
        break;
    }
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
            <dd>{this.state.flag ? <input value = {this.state.nickName} onChange={this.changeName} name="nickName"/>: this.state. nickName}</dd>
          </dl>
          <dl>
            <dt>姓名</dt>
            <dd>{this.state.flag ? <input value = {this.state.name} onChange={this.changeName} name="name"/>: this.state.name}</dd>
          </dl>
          <dl>
            <dt>学号</dt>
            <dd>{this.state.flag ? <input value = {this.state.studentId} onChange={this.changeName} name="studentId"/>: this.state.studentId}</dd>
          </dl>
          <dl>
            <dt>组别</dt>
            <dd>{this.state.flag ? <input value = {this.state.group} onChange={this.changeName} name="group"/>: this.state.group}</dd>
          </dl>
          <dl>
            <dt>邮箱</dt>
            <dd>{this.state.flag ? <input value = {this.state.mail} onChange={this.changeName} name="mail"/>: this.state.mail}</dd>
          </dl>
          <dl>
            <dt>学院</dt>
            <dd>{this.state.flag ? <input value = {this.state.college} onChange={this.changeName} name="college" />: this.state.college}</dd>
          </dl>
          <dl>
            <dt>专业</dt>
            <dd>{this.state.flag ? <input value = {this.state.major} onChange={this.changeName} name="major" />: this.state.major}</dd>
          </dl>
          <dl>
            <dt>年级</dt>
            <dd>{this.state.flag ? <input value = {this.state.grade} onChange={this.changeName} name="grade"/>: this.state.grade}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default BasicInformation