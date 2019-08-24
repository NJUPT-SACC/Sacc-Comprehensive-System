import React from 'react';
import '../less/TechnologyStackList.less';
import { connect } from 'react-redux';
import { actionCreators,store} from '../../store';

class TechnologyStackList extends React.Component{
  componentDidMount(){
    this.props.skill(this.props.authKey);
  }
  render(){
    return (
      <div className="TechnologyStackList">
         <div className="TechnologyStackTitle">
          <p id="TechnologyStack-tree">技术栈</p>
        </div>
        <ul>
          {
            this.props.skillList.map((item,index) => 
              <li key={index}>
                <div className="technologyStackList-imgBox">
                  <img src={'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/' + item.technologyName + '.png'}></img>     
                </div>
                <div className="technologyStackList-des">
                  <p>{item.technologyName}</p>
                  <p>使用人数：{item.userNum}</p>
                </div>
              </li>
            )
          }
        </ul>
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
export default connect(mapStateToProps,mapDispatchToProps)(TechnologyStackList)