import React from 'react';
import '../less/slidebar.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';

const slideBarList = [
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '首页',
    id: 0
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '刷题',
    id: 1
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '技能雷达',
    id: 2
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '技能栈',
    id: 3
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '基本资料',
    id: 4
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '设置',
    id: 5
  }
]

class SlideBar extends React.Component{
  render(){
    return(
      <div className="SlideBarList">
        <ul>
          {
            slideBarList.map(item => 
              <li key={item.id} onClick={this.props.changeShow}>
                <div className="SlideBarLeft">
                  <img src={item.IconUrl}></img>
                  <span>{item.itemName}</span>  
                </div>
                <div className="SlideBarRight">
                  <img src=""></img>
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
		show: state.getIn(['home','show'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    changeShow(e){
      dispatch(actionCreators.changeShow(e.target.innerText))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SlideBar);