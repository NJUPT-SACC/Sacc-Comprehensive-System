import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Divider, Button, Icon, Select } from 'antd';
import './less/competitionArenaStartItem.less'
class CompetitionArenaStartItem extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      answers:0
    }
  }
  changeOption = (e) =>{
    for(let i =0;i<e.target.parentNode.childNodes.length;i++){
      e.target.parentNode.childNodes[i].style.background = '#EBEBEB';
    }
    e.target.style.background = '#fff';
    this.setState({
      answers:e.target.index
    })
  }
	render(){
    const options = ['A、MIPS','B、Power','C、ARM','D、UltraSPARC'];
		return (
			<div className="CompetitionArenaStartItem-main">
        <div className="CompetitionArenaStartItem-title"><Icon type="question-circle" />1、神秘的树莓派<span>[单选题]</span></div>
        <div className="CompetitionArenaStartItem-text">小明是个可爱的男孩子，大一就加入了科协，然后他发现科协里面有好多块叫做树莓派的小电脑，那么这种树莓派的cpu是什么架构呢？</div>
        <div className="CompetitionArenaStartItem-Radios">
          {options.map((item,index) => <div key={index} index={index} className="CompetitionArenaStartItem-Radio" onClick={this.changeOption}>{item}</div>)}
        </div>
        <div style={{float:'right',marginTop:'24px'}}>
          <Button type="danger" style={{marginLeft:'5px',marginRight:'5px'}}>提前交卷</Button>
          <Button type="primary" style={{marginLeft:'5px',marginRight:'5px'}}>下一题</Button>
        </div>
      </div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArenaStartItem);