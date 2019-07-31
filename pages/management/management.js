import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { actionCreators, store} from './store';

import './less/management.less'; 

import ManagementHome from './managementContent/managementHome';
import ManagementWork from './managementContent/managementWork';
import ManagementGame from './managementContent/managementGame';
import ManagementList from './managementContent/managementList';

class Management extends React.Component{
	static async getInitialProps({ req }) {
		console.log(req)
		return req;
	  }

	constructor(props){
		super(props);
	}

	render(){
		const { SubMenu } = Menu;
		const { Header, Content, Sider } = Layout;
		console.log(this.req)
		return (
            <Layout style={{height:'100vh'}}>
				<Header className="header">
				</Header>
				<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
					mode="inline"
					defaultSelectedKeys={['0']}
					defaultOpenKeys={['0']}
					style={{ height: '100%', borderRight: 0 }}
					>
					<SubMenu
						key="sub1"
						title={
						<span>
							<Icon type="read" />
							作业平台
						</span>
						}
					>
						<Menu.Item key="1" onClick={this.props.changeShow}><Icon type="bulb" />发布练习</Menu.Item>
						<Menu.Item key="2" onClick={this.props.changeShow}><Icon type="file-search" />练习列表</Menu.Item>
						<Menu.Item key="3" onClick={this.props.changeShow}><Icon type="search" />结果查询</Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub2"
						title={
						<span>
							<Icon type="file-protect" />
							比赛系统
						</span>
						}
					>
						<Menu.Item key="4" onClick={this.props.changeShow}><Icon type="bulb" />举办比赛</Menu.Item>
						<Menu.Item key="5" onClick={this.props.changeShow}><Icon type="file-search" />比赛列表</Menu.Item>
						<Menu.Item key="6" onClick={this.props.changeShow}><Icon type="search" />成绩查询</Menu.Item>
					</SubMenu>
					<SubMenu
						key="sub3"
						title={
						<span>
							<Icon type="inbox" />
							题库
						</span>
						}
					>
						<Menu.Item key="7" onClick={this.props.changeShow}><Icon type="form" />导入题目</Menu.Item>
						<Menu.Item key="8" onClick={this.props.changeShow}><Icon type="ordered-list" />题目列表</Menu.Item>
					</SubMenu>
					<Menu.Item key="0" onClick={this.props.changeShow}><Icon type="user" />操作日志</Menu.Item>
					</Menu>
				</Sider>
				{(()=>{
					switch(this.props.show){
						case '操作日志':
							return <ManagementHome content={this.props.show}/>
						case '发布练习':
						case '练习列表':
						case '结果查询':
							return <ManagementWork content={this.props.show}/>
						case '举办比赛':
						case '比赛列表':
						case '成绩查询':
						case '比赛详情':		
							return <ManagementGame content={this.props.show}/>
						case '题目列表':
						case '导入题目':	
							return <ManagementList content={this.props.show}/>
					}
				})()}
				</Layout>
			</Layout>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		show: state.management.show
	}
}
const mapDispatchToProps = (dispatch) => {
	return{ 
		changeShow(e){
			dispatch(actionCreators.changeShow(e.item.props.children[1]))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Management);