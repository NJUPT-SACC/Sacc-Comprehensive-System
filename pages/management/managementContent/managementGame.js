import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';

import ManagementGameimport from '../components/Game/ManagementGameimport'
import ManagementGameList from '../components/Game/ManagementGameList'
import ManagementGameDetails from '../components/Game/ManagementGameDetails'

class ManagementGame extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
		const { Content } = Layout;
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                {this.props.show=='比赛详情'?
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>比赛系统</Breadcrumb.Item>
                    <Breadcrumb.Item>比赛列表</Breadcrumb.Item>
                    <Breadcrumb.Item>比赛详情</Breadcrumb.Item>
                </Breadcrumb>
                :<Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>比赛系统</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>
                </Breadcrumb>}
                
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight:'auto'
                }}
                >
                {this.props.show=='举办比赛'?<ManagementGameimport/>:this.props.show=='比赛列表'?<ManagementGameList/>:<ManagementGameDetails/>}
                </Content>
            </Layout>
        )
    }
}
const mapStateToProps = (state) =>{
	return {
		show: state.management.show
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagementGame);