import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb } from 'antd';

class ManagementHome extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
		const { Content } = Layout;
        return (
            <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>个人中心</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                }}
                >
                {this.props.content}
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementHome);