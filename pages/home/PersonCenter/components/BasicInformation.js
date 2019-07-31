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
    this.props.showBlist()
  }

  Editor = () => {
    let currentFlag = this.state.flag;
    this.setState({
      flag: !currentFlag
    })
    if(!this.state.flag)
      this.props.saveNewBasicInformation(this.props.BasicInformationList)
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
    BasicInformationList: state.getIn(['home','BasicInformationList'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    showBlist(){
      dispatch(actionCreators.BasicInformation())
    },
    changeBasicInformation(onChangeBasicInformationList){
      dispatch(actionCreators.changeBasicInformation(onChangeBasicInformationList))
    },
    saveNewBasicInformation(NewBasicInformationList){
      dispatch(actionCreators.SaveNewBasicInformation(NewBasicInformationList))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(BasicInformation);