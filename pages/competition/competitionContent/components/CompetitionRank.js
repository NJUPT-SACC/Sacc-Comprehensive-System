import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Icon, Table, Avatar} from 'antd';

import './less/CompetitionRank.less'

class CompetitionRank extends React.Component{
	
	
	render(){
    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">
          <Avatar style={{ verticalAlign: 'middle' }} size="large">
          {text[0]}
      </Avatar>&nbsp;&nbsp;{text}</a>,
      },
      {
        title: '成绩',
        dataIndex: 'grade',
        key: 'grade',
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
      name:'张三',
      avatar:'Z',
      grade:9
    },{
      name:'李四',
      avatar:'L',
      grade:7
    },{
      name:'王五',
      avatar:'W',
      grade:7
    },{
      name:'Alex',
      avatar:'A',
      grade:5
    },{
      name:'Mike',
      avatar:'M',
      grade:5
    },{
      name:'BigBoss',
      avatar:'B',
      grade:4
    },{
      name:'小明',
      avatar:'Z',
      grade:3
    }]
    return (
			<div className='CompetitionRank-content'>
        <div className='CompetitionRank-title'><Icon type="global" />&nbsp;&nbsp;排名</div>
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
export default connect(mapStateToProps,mapDispatchToProps)(CompetitionRank);