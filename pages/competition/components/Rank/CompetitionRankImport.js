import React from 'react';
import { connect } from 'react-redux';
import { Row,Col,Avatar } from 'antd';
import { actionCreators,store } from '../../store';

class CompetitionRankImport extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.receiveEachRankList()
    console.log(this.props.competitionEachRankList)
  }

  render(){
    return (
      <div>
      {
        this.props.competitionEachRankList.map(item =>
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
    competitionEachRankList:state.competition.competitionEachRankList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    receiveEachRankList(){
      dispatch(actionCreators.receiveEachRankList());
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionRankImport);