import React from 'react';
import { connect } from 'react-redux';
import { Drawer, Descriptions, Input, Divider } from 'antd';

import ManagementGameListCard from "./ManagementGameListCard";

const { Search } = Input;

class ManagementGameList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render(){
        return (
            <div style={{display:'flex',flex:'auto',flexWrap:'wrap'}}>
                <Search placeholder="请输入搜索内容" onSearch={value => console.log(value)} enterButton/>
                <Divider />
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='正在进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='未进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='未进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='正在进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='正在进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='未进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='正在进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='正在进行'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <ManagementGameListCard showDrawer={this.showDrawer} gameId='23' did='已结束'/>
                <Drawer
                width={640}
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                >
                <Descriptions title="比赛信息" bordered>
                    <Descriptions.Item label="比赛ID" span={3}>2019072301</Descriptions.Item>
                    <Descriptions.Item label="比赛名称" span={3}>计算机基础知识大赛</Descriptions.Item>
                    <Descriptions.Item label="开始时间" span={3}>2018-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="结束时间" span={3}>2019-04-24 18:00:00</Descriptions.Item>
                    <Descriptions.Item label="地点" span={3}>计算机学科楼</Descriptions.Item>
                    <Descriptions.Item label="举行状况" span={3}>正在进行</Descriptions.Item>
                    <Descriptions.Item label="注意事项" span={3}>
                    1、
                    <br />
                    2、
                    <br />
                    3、
                    <br />
                    4、
                    <br />
                    5、
                    </Descriptions.Item>
                    <Descriptions.Item label="题目列表" span={3}>
                        <div>
                            1、
                            <br />
                            2、
                            <br />
                            3、
                            <br />
                            4、
                            <br />
                            5、
                            <br />
                            1、
                            <br />
                            2、
                            <br />
                            3、
                            <br />
                            4、
                            <br />
                            5、
                        </div>
                    </Descriptions.Item>
                </Descriptions>
                <a>查看更多</a>
                </Drawer>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementGameList);