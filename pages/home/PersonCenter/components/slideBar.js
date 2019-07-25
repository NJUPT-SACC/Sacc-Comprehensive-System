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
    itemName: '技术栈',
    id: 2
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '基本资料',
    id: 3
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    itemName: '设置',
    id: 4
  }
]

class SlideBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: null
    }
  }
  ChangeActiveColor(e, item){
    console.log(item);
    this.setState({
      currentIndex: item.id
    })
     this.props.changeShow(e)
  }

  render(){
    return(
      <div className="SlideBarList">
        <ul>
          {
            slideBarList.map(item => 
              <li 
                key={item.id} 
                className={this.state.currentIndex === item.id ? 'ActiveColor' :''} 
                onClick={e => {this.ChangeActiveColor(e, item)}}
              >
                  <img src={item.IconUrl}></img>
                  <span key={item.id}>{item.itemName}</span>  
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
      console.log(e.target.innerText)
      dispatch(actionCreators.changeShow(e.target.innerText))

    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SlideBar);