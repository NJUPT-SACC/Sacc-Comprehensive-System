import React from 'react';
import '../less/head.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';

class Head extends React.Component{

  constructor(props){
    super(props)
    this.portraitRef = React.createRef()
  }

  changePortrait = (e) => {

    for (let i in e.target.files) {
        let file = e.target.files.item(i);
        let freader = new FileReader();
        freader.readAsDataURL(file);
        freader.onload = (e) => {
          this.props.changePortrait(e.target.result)
        } 
    }
    
  }

    render(){
    return (
      <div className="PChead">
        <div className="PCgreenSlide"></div>
        <div className="personHeadLeft">
          <div className="PCimgBox">
            <label>
              <img src={this.props.portrait}  style={{width:'70px',height: '70px'}}></img>
              <input id="avatarFile" accept="image/*" name="avatarFile" type="file" onChange={this.changePortrait}/>
            </label>
          </div>
          <div className="PCDes">
            <p>ouu</p>
            <span>前端组</span>
            <span>打字员打字员</span>
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
    portrait: state.getIn(['home','portrait']),
    BasicInformationList: state.getIn(['home','BasicInformationList'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    changePortrait(portrait){
        dispatch(actionCreators.ChangePortrait(portrait))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Head)