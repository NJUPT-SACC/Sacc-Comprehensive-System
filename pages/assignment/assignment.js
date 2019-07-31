import React from 'react';

// 页面
import AssignmentHome from './pages/assignmentHome'

// 样式
import './style/index.less'
import '../../static/fonts/iconfont.css'

class Assignment extends React.Component{
	
	render(){
		return (
      <div className="assignment-wrapper">
        <AssignmentHome />
      </div>
		);
	}
};
export default Assignment