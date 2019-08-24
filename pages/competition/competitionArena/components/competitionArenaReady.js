import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Layout, Icon, Button, Radio } from 'antd';
import router from 'next/router'
import './less/competitionArenaReady.less'
import Router from 'next/router'



class CompetitionArenaReady extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			
		}
	}
  gotoCompetition=()=>{
    Router.push({
			pathname: '/competition'
		})
  }
	render(){
		return (
      <Row style={{marginTop:'24px'}}>
        <Col span={14} offset={5}>
            <div style={{fontSize:'18',color:'gray'}}>
              <div style={{cursor:'pointer'}} onClick={this.gotoCompetition}><Icon type="left" />  返回比赛主页</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div>
              <div id='competitionArenaReady-title'>计算机基础知识大赛</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div className="competitionArenaReady-slider">
              <div className="competitionArenaReady-slider-text">>距离比赛开始还有120分钟</div>
              <div className="competitionArenaReady-slider-block"></div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div className="competitionArenaReady-ready">
              <div style={{fontSize:'24px'}}><Icon type="bulb" />重要提示</div>
              <div>1、请注意，每个错误提交的惩罚时间已经从 10分钟 改变为了 5分钟 。</div>
              <div>2、所有的解答提交都会自动经过我们严格智能的作弊侦测系统。 如被检查出抄袭、作弊等行为，将会直接导致 参赛资格被取消 以及 至少三周的账号冻结 。 力扣一向非常重视竞赛的公平，为了保障每一位用户的权益，我们会坚持以 零容忍 的态度维护竞赛的公平、公正。</div>
              <div>3、请注意，每个错误提交的惩罚时间已经从 10分钟 改变为了 5分钟 。</div>
              <div>4、所有的解答提交都会自动经过我们严格智能的作弊侦测系统。 如被检查出抄袭、作弊等行为，将会直接导致 参赛资格被取消 以及 至少三周的账号冻结 。 力扣一向非常重视竞赛的公平，为了保障每一位用户的权益，我们会坚持以 零容忍 的态度维护竞赛的公平、公正。</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
              <div style={{position:'relative',height:'6vh'}}>
                <Radio style={{height:'6vh',fontSize:'18px',position:'absolute',transform:'translate(-50%,-50%)',top:'50%',left:"50%"}}>我已阅读以上文字并确认自己准备好比赛了</Radio>
              </div>
          </Col>
          <Col span={8} offset={8}>
              <div style={{position:'relative',height:'6vh'}}>
                <Button type="primary" style={{height:'6vh',width:'10vw',fontSize:'24px',position:'absolute',transform:'translate(-50%,-50%)',top:'50%',left:"50%"}}>开始比赛</Button>
              </div>
          </Col>
        </Row>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		name: state.competition.competitionName
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArenaReady);