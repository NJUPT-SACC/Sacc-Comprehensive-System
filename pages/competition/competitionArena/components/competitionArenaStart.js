import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Row, Col, Icon } from 'antd';
import './less/competitionArenaStart.less'
import CompetitionArenaStartItem from './competitionArenaStartItem'
import CompetitionArenaStartList from './competitionArenaStartList'
import Router from 'next/router'
class CompetitionArenaStart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      width:'0%',
      poor:new Date("2019-9-21 14:50:00")-new Date("2019-8-21 14:30:00"),
      time:((new Date("2019-9-21 14:50:00")-Date.now())/60000).toFixed(1)
    }
    this.block = React.createRef();
  }
  componentDidMount(){
    this.updataTime();
  }
  componentWillUnmount(){
    clearInterval(this.blocktime);
    clearInterval(this.timepoor);
  }
	gotoCompetition=()=>{
    Router.push({
			pathname: '/competition'
		})
  }
  updataTime = () =>{
    this.blocktime = setInterval(()=>{
      let poor = new Date("2019-9-21 14:50:00")-Date.now();
      this.block.current.style.width = (1-poor/this.state.poor).toFixed(2)*200+'%'
    },2000)
    this.timepoor = setInterval(()=>{
      this.setState({
        time:((new Date("2019-8-21 14:50:00")-Date.now())/1000/60).toFixed(1)
      })
    },6000)
  }
	render(){
    let blockwidth = {width:'150%'}
		return (
			<Row style={{marginTop:'24px'}}>
        <Col span={14} offset={5}>
            <div style={{fontSize:'18',color:'gray'}}>
              <div style={{cursor:'pointer'}} onClick={this.gotoCompetition}><Icon type="left" />  返回比赛主页</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div>
              <div id='competitionArenaStart-title'>计算机基础知识大赛</div>
            </div>
          </Col>
          <Col span={14} offset={5}>
            <div className="competitionArenaStart-slider">
              <div className="competitionArenaStart-slider-text">>距离比赛结束还有{this.state.time}分钟</div>
              <div ref={this.block} className="competitionArenaStart-slider-block"></div>
            </div>
          </Col>
          <Col span={9} offset={5}>
            <CompetitionArenaStartItem/>
          </Col>
          <Col span={4} offset={1}>
            <CompetitionArenaStartList/>
          </Col>
        </Row>
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
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArenaStart);