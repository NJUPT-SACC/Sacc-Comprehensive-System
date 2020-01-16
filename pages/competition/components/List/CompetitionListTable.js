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
  }

  render(){
    const labelList = ['名称','时间','成绩','状态']
    return (
      <div>
      <h3>比赛记录</h3>
      <Row>{ labelList.map(item =><Col span={6}>{item}</Col>) }</Row>
      {
        this.props.competitionList.map(item => 
        <Row style={{borderBottom: '1px solid #ddd'}}>
          <Col span={6}>{item.name}</Col>
          <Col span={6}>{item.time}</Col>
          <Col span={6}>{item.grade}</Col>
          <Col span={6}>{item.status}</Col>
        </Row>)
      }
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionList:state.competition.competitionList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    receiveList(){
      dispatch(actionCreators.receiveList());
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionListTable);