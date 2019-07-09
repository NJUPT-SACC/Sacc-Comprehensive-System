import React from 'react';
import { connect } from 'react-redux';
import store from './store';

// 页面
import { SideBar } from './components'

// 样式
import './style/index.less'
import './style/iconfont.css'

class Assignment extends React.Component{
	
	render(){
		return (
      <div>
        <SideBar />
      </div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
};
const mapDispatchToProps = (dispatch) => {
	return {

	}
};
export default connect(mapStateToProps,mapDispatchToProps)(Assignment);