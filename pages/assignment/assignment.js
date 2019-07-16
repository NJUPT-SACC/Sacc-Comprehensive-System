import React from 'react';
import { connect } from 'react-redux';
import store from './store';

// 页面
import {
  AssignmentSide,
  AssignmentHeader,
  AssignmentContent,
} from './components'

// 样式
import './style/index.less'
import './style/iconfont.css'

class Assignment extends React.Component{
	
	render(){
		return (
      <div className="assignment-wrapper">
        {/*<AssignmentSide />*/}
        <div className="right-wrapper">
          <AssignmentHeader />
          <AssignmentContent />
        </div>
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