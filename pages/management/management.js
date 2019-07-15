import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { actionCreators, store} from './store';
import './less/management.less'; 
import Head from 'next/head';
import ManagementHome from './managementContent/managementHome'
import { getIn } from 'immutable';

class Management extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const { SubMenu } = Menu;
		const { Header, Content, Sider } = Layout;
		console.log(this.props.show)
		return (
            <Layout style={{height:'100vh'}}>
				<Head>
					<title>SACC of Integrated system</title>
					<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				</Head>
				<Header className="header">
				<div className="logo" />
				</Header>
				<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<Menu
					mode="inline"
					defaultSelectedKeys={['0']}
					defaultOpenKeys={['0']}
					style={{ height: '100%', borderRight: 0 }}
					>
						<Menu.Item key="0" onClick={this.props.changeShow}><Icon type="user" />个人中心</Menu.Item>
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
						<Menu.Item key="2"><Icon type="file-search" />练习列表</Menu.Item>
						<Menu.Item key="3"><Icon type="search" />结果查询</Menu.Item>
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
						<Menu.Item key="5"><Icon type="file-search" />比赛列表</Menu.Item>
						<Menu.Item key="6"><Icon type="search" />成绩查询</Menu.Item>
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
						<Menu.Item key="7"><Icon type="form" />导入题目</Menu.Item>
						<Menu.Item key="8" onClick={this.props.changeShow}><Icon type="ordered-list" />题目列表</Menu.Item>
					</SubMenu>
					</Menu>
				</Sider>
				{(()=>{
					switch(this.props.show){
						case '个人中心':
							return <ManagementHome content='个人中心' breadcrumb={['个人中心']}/>
						case '发布练习':
							return <ManagementHome content='发布练习' breadcrumb={['作业平台','发布练习']}/>
						case '举办比赛':
							return <ManagementHome content='举办比赛' breadcrumb={['比赛系统','举办比赛']}/>
						case '题目列表':
							return <ManagementHome content='题目列表' breadcrumb={['题库','题目列表']}/>
					}
				})()}
				</Layout>
			</Layout>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		show: state.getIn(['management','show'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		changeShow(e){
			dispatch(actionCreators.changeShow(e.item.props.children[1]))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Management);