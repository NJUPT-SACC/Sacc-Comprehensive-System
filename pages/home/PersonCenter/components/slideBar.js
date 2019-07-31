import React from 'react';
import '../less/slidebar.less';
import { connect } from 'react-redux';
import { actionCreators, store} from '../../store';

const slideBarList = [
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%A6%96%E9%A1%B5-%E9%80%89%E4%B8%AD.png',
    itemName: '首页',
    id: 0
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E6%8A%80%E6%9C%AF%E6%A0%88.png',
    itemName: '技术栈',
    id: 1
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%9F%BA%E6%9C%AC%E8%B5%84%E6%96%99.png',
    itemName: '基本资料',
    id: 2
  },
  {
    IconUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E8%AE%BE%20%E7%BD%AE.png',
    itemName: '设置',
    id: 3
  }
]

class SlideBar extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      currentIndex: 0
    }
  }
  ChangeActiveColor(e, item){
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
		show: state.home.show
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