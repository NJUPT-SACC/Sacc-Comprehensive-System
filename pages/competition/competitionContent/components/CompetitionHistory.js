import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Icon, Table} from 'antd';

import './less/CompetitionHistory.less'
import { actionCreators } from '../../store';

class CompetitionHistory extends React.Component{
	
	
	render(){
    const columns = [
      {
        title: '比赛名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
      },
      {
        title: '地点',
        dataIndex: 'location',
        key: 'location',
      },
      {
        title: '时间',
        dataIndex: 'startTime',
        key: 'startTime',
      },
      {
        title: '',
        key: 'action',
        render: action => (
          <span>
            <a href="javascript:;">查看</a>
          </span>
        ),
      }
    ];
    return (
			<div className='CompetitionHistory-content'>
        <div className='CompetitionHistory-title'>往期比赛回顾<div>> 我的比赛记录</div></div>
        <div><Table columns={columns} dataSource={this.props.competitionList} pagination={false}/></div>
			</div>
		);
  }
}
const mapStateToProps = (state) =>{
	return {
		competitionList:state.competition.competitionList
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    initList(){
      dispatch(actionCreators.init_list())
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionHistory);