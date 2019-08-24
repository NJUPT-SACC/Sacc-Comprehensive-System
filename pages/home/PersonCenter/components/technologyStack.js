import React from 'react';
import '../less/technologyStack.less';
import { connect } from 'react-redux';
import { actionCreators,store} from '../../store';


class TechnologyStack extends React.Component{
  componentDidMount(){
    this.props.skill(this.props.authKey);
  }
  render(){
    return (
      <div className="technology-stack">
        <div className="technology-stack-title">
          <p id="technology-stack">使用的技术</p>
          <span id="technologyNum">{this.props.skillList.length}</span>
        </div>
          <div className="technologyList">
            <ul>
              {
                this.props.skillList.map((item,index) => 
                <li key={index}><img src={'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/' + item.technologyName + '.png'} ></img> </li>)
              }
            </ul>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
	return {
    skillList: state.home.skillList,
    authKey: state.home.authKey
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    skill(authKey){
      dispatch(actionCreators.Skill(authKey))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(TechnologyStack);