import React from 'react'
import { connect } from 'react-redux'
import './less/competitionArenaStartList.less'
import { Icon, Table, Tag  } from 'antd'

const data = [
  {
    key: '1',
    name: '神秘的树莓派神秘的树莓派神秘的树莓派神秘的树莓派',
    done: false,
    type: '硬件',
  },
  {
    key: '2',
    name: '卡顿的电脑',
    done: false,
    type: '硬件',
	},
	{
    key: '3',
    name: '+1s的端口号',
    done: false,
    type: '硬件',
	},
	{
    key: '4',
    name: '长者的ES6',
    done: false,
    type: 'JavaScript',
	},
	{
    key: '5',
    name: '老司机们的方向盘',
    done: false,
    type: '硬件',
	},
	{
    key: '3',
    name: '+1s的端口号',
    done: false,
    type: '硬件',
	},
	{
    key: '4',
    name: '长者的ES6',
    done: false,
    type: 'JavaScript',
	},
	{
    key: '5',
    name: '老司机们的方向盘',
    done: false,
    type: '硬件',
	},
	{
    key: '3',
    name: '+1s的端口号',
    done: false,
    type: '硬件',
	},
	{
    key: '4',
    name: '长者的ES6',
    done: false,
    type: 'JavaScript',
	},
	{
    key: '5',
    name: '老司机们的方向盘',
    done: false,
    type: '硬件',
  },
];

const columns = [
  {
    title: '题目',
    dataIndex: 'name',
		key: 'name',
		render: name => (
			<div style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',width:'6rem'}}>
				<a href="javascript:;">{name}</a>,
			</div>
		)
  },
  {
    title: '类型',
    dataIndex: 'type',
		key: 'type',
		render: type => (
      <span>
        <Tag>
					{type}
				</Tag>
      </span>
    ),
  },
  {
    title: 'done',
    dataIndex: 'done',
		key: 'done',
		render: done => (
			<span>
        {done?<Icon type="check-circle" />:<Icon type="close-circle" />}
      </span>
		)
  },
];

class CompetitionArenaStartList extends React.Component{
	render(){
		return (
			<div className="CompetitionArenaStartList-main">
				<div className="CompetitionArenaStartList-title"><Icon type="crown" theme="outlined" style={{color:'#000'}}/>题目列表</div>
				<div className="CompetitionArenaStartList-table">
					<Table columns={columns} dataSource={data} pagination={false} showHeader={false}/>
				</div>
			</div>
		)
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
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionArenaStartList);