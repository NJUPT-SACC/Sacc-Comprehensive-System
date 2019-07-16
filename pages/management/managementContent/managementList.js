import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb, Select, Form, Switch, Icon, Checkbox, Input, Button, Slider, Steps, Divider} from 'antd';

import ManagementListRadio from '../components/ManagementListImport';

class ManagementList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const { Content } = Layout;
        
        return (
            <Layout style={{ padding: '0 24px 24px'}} ref={el => this.el = el}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>题库</Breadcrumb.Item>
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
                <ManagementListRadio/>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementList);