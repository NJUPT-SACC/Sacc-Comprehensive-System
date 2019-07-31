import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Icon, Table} from 'antd';

import './less/CompetitionHistory.less'

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
        dataIndex: 'place',
        key: 'place',
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
    const data = [{
      id: 1,
      name: '计算机基础知识大赛',
      startTime: '2019 7 25 18:00:00',
      endtime: '2019 7 25 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    }, {
      id: 2,
      name: '计算机知识大赛',
      startTime: '2019 7 24 18:00:00',
      endtime: '2019 7 24 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    }, {
      id: 3,
      name: '计算机基础大赛',
      startTime: '2019 7 26 18:00:00',
      endtime: '2019 7 26 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    },{
      id: 1,
      name: '计算机基础知识大赛',
      startTime: '2019 7 25 18:00:00',
      endtime: '2019 7 25 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    }, {
      id: 2,
      name: '计算机知识大赛',
      startTime: '2019 7 24 18:00:00',
      endtime: '2019 7 24 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    }, {
      id: 3,
      name: '计算机基础大赛',
      startTime: '2019 7 26 18:00:00',
      endtime: '2019 7 26 20:00:00',
      place: '计算机学科楼101',
      matters: '各位选手提前两小时到场'
    }]
    return (
			<div className='CompetitionHistory-content'>
        <div className='CompetitionHistory-title'>往期比赛回顾<div>> 我的比赛记录</div></div>
        <div><Table columns={columns} dataSource={data} pagination={false}/></div>
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
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionHistory);