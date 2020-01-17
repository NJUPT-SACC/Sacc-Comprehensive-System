import React from 'react';
import { connect } from 'react-redux';
import { Row,Col,Avatar } from 'antd';
import { actionCreators,store } from '../../store';

class CompetitionRankImport extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveAllRankList()
  }

  render(){
    const data = this.props.show == "所有比赛" ?
    this.props.competitionAllRankList :
    this.props.competitionList[this.props.competitionEachRankListId].rank

    return (
      <div>
      {
        data.map(item =>
        <Row>
          <Col span={8}>        
            <Avatar style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }} size="large">
              {item.name}
            </Avatar>
          </Col>
          <Col span={8}>{item.name}</Col>
          <Col span={8}>{item.grade}</Col>
        </Row>  
        )
      }
    </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    show: state.competition.show,
    competitionList:state.competition.competitionList,
    competitionAllRankList:state.competition.competitionAllRankList,
    competitionEachRankListId:state.competition.competitionEachRankListId,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    receiveAllRankList(){
      dispatch(actionCreators.receiveAllRankList());
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionRankImport);