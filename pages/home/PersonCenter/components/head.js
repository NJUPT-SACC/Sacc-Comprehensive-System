import React from 'react';
import '../less/head.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';
import { Upload, Icon, message } from 'antd';
import { Avatar } from 'antd';
class Head extends React.Component{

  constructor(props){
    super(props)
    this.portraitRef = React.createRef()
    this.state ={
      num: 0
    }
  }
componentDidMount(){
  this.props.showBlist()
}

  changeSignature = (e) => {
    this.props.BasicInformationList[9].value = e.target.value;

    this.setState({
      num:1
    })
    
    this.props.changeBasicInformation(List)
  }


    render(){
      const UserImgColor = '#63b5bb';      
    return (
      <div className="PChead">
        <div className="PCgreenSlide"></div>
        <div className="personHeadLeft">
          <div className="PCimgBox">
            <Avatar style={{ backgroundColor: UserImgColor, verticalAlign: 'middle',height:"70px",width:"70px",fontSize:"25px",lineHeight:"70px" }} size="large">
            {this.props.BasicInformationList[0].value.split("", 1)}
          </Avatar>
          </div>
          <div className="PCDes">
            <p>{this.props.BasicInformationList[0].value}</p>
            <span>{this.props.BasicInformationList[3].value}</span>
            <span>{this.props.BasicInformationList[9].value}</span>
          </div>
        </div>
        <div className="personHeadRight">
          <button>打卡</button>
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    BasicInformationList: state.home.BasicInformationList
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
    showBlist(){
      dispatch(actionCreators.BasicInformation())
    }
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Head)