import React from 'react';
import { Descriptions } from 'antd';
export default class ManagementGameDetails extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
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
            </div> 
        )
    }
}
