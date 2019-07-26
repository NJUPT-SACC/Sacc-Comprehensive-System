import React from 'react';
import '../less/basicInformation.less';
class BasicInformation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      flag: false,
      BasicInformationList: [
        {
          key: '昵称',
          value: 'ouu'
        },{
          key:'姓名',
          value: '张颖'
        },{
          key: '学号',
          value:'B18030406'
        },{
          key: '组别',
          value: '前端组'
        },{
          key: '邮箱',
          value: '389746410@qq.com'
        },{
          key: '学院',
          value: '计算机学院、软件学院、网络空间安全学院'
        },{
          key: '专业',
          value: '计算机科学与技术'
        },{
          key: '年级',
          value: '大一'
        }
      ]
    }
  }

  changeValue = (e) => {
    let List = this.state.BasicInformationList;
    List.map((obj) =>  {
      if(e.target.name == obj.key){
        obj.value = e.target.value;
      }
    })
    this.setState({
      BasicInformationList: List
    })
  }

  Editor = () => {
    let currentFlag = this.state.flag;
    this.setState({
      flag: !currentFlag
    })
  }

  render(){
    return(
      <div className="BasicInformation">
        <div className="BasicInformationCaption">
          <p>基本信息</p>
          <button onClick={this.Editor}>{this.state.flag?'保存':'编辑'}</button>
        </div>
        <div className="BasicInformationList">
          {
            this.state.BasicInformationList.map(item =>
              <dl>
                <dt>{item.key}</dt>
                <dd>{this.state.flag? <input value={item.value} onChange={this.changeValue} name={item.key}/>:item.value}</dd>
              </dl>
              )
          }
        </div>
      </div>
    )
  }
}

export default BasicInformation