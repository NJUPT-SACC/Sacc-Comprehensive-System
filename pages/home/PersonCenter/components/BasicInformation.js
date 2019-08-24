import React from 'react';
import '../less/basicInformation.less';
import { actionCreators } from '../../store';
import { connect } from 'react-redux';

class BasicInformation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      flag: false,
      num:0
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

  render(){
    return(
      <div className="BasicInformation">
        <div className="BasicInformationCaption">
          <p>基本信息</p>
          <button onClick={this.Editor}>{this.state.flag?'保存':'编辑'}</button>
        </div>
        <div className="BasicInformationList">
          {
            this.props.BasicInformationList.map(item =>
              <dl key={item.id}>
                <dt>{item.key}</dt>
                <dd>{this.state.flag? <input value={item.value} onChange={this.changeBasicInformation} name={item.key}/>:item.value}</dd>
              </dl>
              )
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