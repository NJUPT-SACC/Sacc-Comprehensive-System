import React from 'react';
import '../less/basicInformation.less';
import { actionCreators } from '../../store';
import { connect } from 'react-redux';
const collegeList = ['通信与信息工程学院','电子与光学工程学院、微电子学院','计算机学院、软件学院、网络空间安全学院','自动化学院、人工智能学院',	'材料科学与工程学院',	'物联网学院',	'理学院',	'地理与生物信息学院',	'现代邮政学院',	'传媒与艺术学院',	'管理学院',	'经济学院',	'社会与人口学院',	'外国语学院',	'教育科学与技术学院','贝尔英才学院']
class BasicInformation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      flag: false,
      num: 0,
      majorList: ['通信工程','电子信息工程','广播电视工程']
    }
  }

  componentWillMount(){
    this.props.showBlist(this.props.authKey)
  }

  Editor = () => {
    let currentFlag = this.state.flag;
    this.setState({
      flag: !currentFlag
    })
    if(!this.state.flag)
      this.props.saveNewBasicInformation(this.props.BasicInformationList,this.props.authKey)
  }

  changeBasicInformation = (value) =>{
    let List =  this.props.BasicInformationList;
    const name = value.target.name;
    const Value = value.target.value;
    List.map(item => {
      if(item.key == name){
        item.value = Value
      }
    })
    this.setState({
      num:1
    })
    this.props.changeBasicInformation(List)
  }
  
  selectCollege = (value) => {
    switch(value.target.value){
      case '通信与信息工程学院':
        this.setState({
          majorList: ['通信工程','电子信息工程','广播电视工程']
        })
        break;
      case '电子与光学工程学院、微电子学院':
        this.setState({
          majorList: ['电子科学与技术','电磁场与无线技术','微电子科学与工程','光电信息科学与工程','电信工程及管理']
        })
        break;
      case '计算机学院、软件学院、网络空间安全学院':
        this.setState({
          majorList: ['计算机科学与技术','信息安全','软件工程','软件工程(嵌入式培养)','NIIT']
        })
        break;
      case '自动化学院、人工智能学院':
        this.setState({
          majorList: ['测控技术与仪器','电气工程及其自动化','智能电网信息工程','自动化','智能科学与技术']
        })
        break;
      case '材料科学与工程学院':
        this.setState({
          majorList: ['高分子材料与工程','材料化学','材料物理']
        })
        break;
      case '物联网学院':
        this.setState({
          majorList: ['网络工程','物联网工程']
        })
        break;
      case '理学院':
        this.setState({
          majorList: ['信息与计算科学','应用统计学','应用物理学']
        })
        break;
      case '地理与生物信息学院':
        this.setState({
          majorList: ['地理信息科学','测绘工程','生物医学工程','人文地理与城乡规划']
        })
        break;
      case '现代邮政学院':
        this.setState({
          majorList: ['邮政工程','邮政管理','物流管理']
        })
        break;
      case '传媒与艺术学院':
        this.setState({
          majorList: ['广告学','数字媒体艺术(艺术类)','动画(艺术类)']
        })
        break;
      case '管理学院':
        this.setState({
          majorList: ['财务管理','电子商务','工商管理','人力资源管理','市场营销','信息管理与信息系统']
        })
        break;
      case '经济学院':
        this.setState({
          majorList: ['经济学','国际经济与贸易','经济统计学','金融工程']
        })
        break;
      case '社会与人口学院':
        this.setState({
          majorList: ['公共事业管理','行政管理','社会工作']
        })
        break;
      case '外国语学院':
        this.setState({
          majorList: ['英语','日语','翻译']
        })
        break;
      case '教育科学与技术学院':
        this.setState({
          majorList: ['教育技术学','数字媒体技术']
        })
        break;
      case '贝尔英才学院':
        this.setState({
          majorList: ['信息科技英才班','理工科强化班','信息文科强化班']
        })
        break;
    }
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
            <div>
             { this.props.BasicInformationList.slice(0,8).map((item,index) =>
                <dl key={index}>
                  <dt>{item.key}</dt>
                  <dd>{this.state.flag? <input value={item.value} onChange={this.changeBasicInformation} name={item.key}/>:item.value}</dd>
                </dl>
                )
              }
              {
                <dl>
                <dt>学院</dt>
                <dd>
                  {
                    this.state.flag ? 
                      <select onClick={this.selectCollege}>{ collegeList.map(item=><option value={item}>{item}</option>) }</select>
                    :
                    this.props.BasicInformationList[8].value
                  }
                </dd>
              </dl>}
              {
              <dl>
                <dt>专业</dt>
                <dd>
                  {
                    this.state.flag? 
                    <select>{ this.state.majorList.map(item=><option value={item}>{item}</option>) }</select>
                    :
                    this.props.BasicInformationList[9].value
                  } 
                </dd>
              </dl>
              }
            </div>
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
	return {
    BasicInformationList: state.home.BasicInformationList,
    authKey: state.home.authKey
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    showBlist(authKey){
      dispatch(actionCreators.BasicInformation(authKey))
    },
    changeBasicInformation(onChangeBasicInformationList){
      dispatch(actionCreators.changeBasicInformation(onChangeBasicInformationList))
    },
    saveNewBasicInformation(NewBasicInformationList,authKey){
      dispatch(actionCreators.SaveNewBasicInformation(NewBasicInformationList,authKey))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BasicInformation);