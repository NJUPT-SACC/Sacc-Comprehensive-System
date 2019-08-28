import React from 'react';
import '../less/head.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';
import { Avatar } from 'antd';
class Head extends React.Component{
    componentDidMount(){
      this.props.showBlist(this.props.authKey)
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
            <span>{this.props.BasicInformationList[5].value}</span>
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
    BasicInformationList: state.home.BasicInformationList,
    authKey: state.home.authKey
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
    showBlist(authKey){
      dispatch(actionCreators.BasicInformation(authKey))
    }
	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Head)