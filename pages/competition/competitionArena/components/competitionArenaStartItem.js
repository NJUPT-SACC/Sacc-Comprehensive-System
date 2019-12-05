import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Divider, Button, Icon, Select } from 'antd';
import './less/competitionArenaStartItem.less'
import dynamic from 'next/dynamic'
import Axios from 'axios';
const Editor = dynamic(import("for-editor"), { ssr: false });
class CompetitionArenaStartItem extends React.Component{
	constructor(props){
    super(props);
    this.state = {
      answers:null,
      value: ``
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
  handleChange = (value) =>{
    this.setState({
      value
    })
  }
  
	render(){
    const options = ['A、MIPS','B、Power','C、ARM','D、UltraSPARC'];
    const toolbar = {
      h1: false, // h1
      h2: false, // h2
      h3: false, // h3
      h4: false, // h4
      img: false, // 图片
      link: false, // 链接
      code: false, // 代码块
      preview: false, // 预览
      expand: false, // 全屏
      /* v0.0.9 */
      undo: false, // 撤销
      redo: false, // 重做
      save: false, // 保存
      /* v0.2.3 */
      subfield: false, // 单双栏模式
    }
    const ediotstyle = {
      wordWrap:'break-word'
    }
		return (
			<div className="CompetitionArenaStartItem-main">
        <div className="CompetitionArenaStartItem-title"><Icon type="question-circle" />1、神秘的树莓派<span>[单选题]</span></div>
        <Editor value={this.state.value} toolbar={toolbar} preview={true} height={300} style={ediotstyle}/>
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