import React from 'react';
import { connect } from 'react-redux';
import { Row,Col } from 'antd';
import { actionCreators,store } from '../../store';

class CompetitionListTable extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveList()
    this.props.receiveAllList()
  }

  render(){
    const personalLabelList = ['名称','时间','成绩','状态']
    const allLabelList = ['名称','时间','地点','举办单位','状态']
    
    return (
      <div>
        <Row>{ 
        this.props.show == '我参加的' ?
          personalLabelList.map(item =><Col span={6}>{item}</Col>)
          :
          allLabelList.map(item =><Col span={4}>{item}</Col>) 
        }</Row>
        { 
        this.props.show == '我参加的' ?
          this.props.competitionList.map(item => 
            <div className={item.id} onClick={this.props.showEachRankList}>
              <Row style={{borderBottom: '1px solid #ddd'}} >
                <Col span={6}>{item.name}</Col>
                <Col span={6}>{item.time}</Col>
                <Col span={6}>{item.grade}</Col>
                <Col span={6}>{item.status}</Col>
              </Row>
            </div>
          )
          :
          this.props.competitionAllList.map(item => 
            <Row style={{borderBottom: '1px solid #ddd'}} key={item.id}>
              <Col span={4}>{item.name}</Col>
              <Col span={4}>{item.endTime}</Col>
              <Col span={4}>{item.place}</Col>
              <Col span={6}>{item.createBy}</Col>
              <Col span={4}>{item.status}</Col>
            </Row>)
        }
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionList:state.competition.competitionList,
    competitionAllList:state.competition.competitionAllList,
    show:state.competition.show
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
    receiveList(){
      dispatch(actionCreators.receiveList());
    },
    receiveAllList(){
      dispatch(actionCreators.receiveAllList())
    },
    showEachRankList(e){
      dispatch(actionCreators.showEachRankList(e.currentTarget.className))
    }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);