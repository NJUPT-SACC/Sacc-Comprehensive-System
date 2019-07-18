import React from 'react';
import { connect } from 'react-redux';

// 页面
import {
  AssignmentHome,
  AssignmentCoding
} from './pages'

// 样式
import './style/index.less'
import '../../static/fonts/iconfont.css'

class Assignment extends React.Component{
	
	render(){
		return (
      <div className="assignment-wrapper">
        <AssignmentHome />
        <AssignmentCoding />
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