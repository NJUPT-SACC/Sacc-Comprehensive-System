import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';

import ManagementGameimport from '../components/Game/ManagementGameimport'
import ManagementGameList from '../components/Game/ManagementGameList'

class ManagementGame extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
		const { Content } = Layout;
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>比赛系统</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight:'auto'
                }}
                >
                {this.props.show=='举办比赛'?<ManagementGameimport/>:<ManagementGameList/>}
                </Content>
            </Layout>
        )
    }
}
const mapStateToProps = (state) =>{
	return {
		show: state.getIn(['management','show'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagementGame);