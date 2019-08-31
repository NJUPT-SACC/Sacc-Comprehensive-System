import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';

import ManagementWorkimport from '../components/Work/ManagementWorkimport'
import ManagementWorkList from '../components/Work/ManagementWorkList'

class ManagementWork extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
		const { Content } = Layout;
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>练习系统</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                <ManagementWorkList/>
                </Content>
            </Layout>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementWork);