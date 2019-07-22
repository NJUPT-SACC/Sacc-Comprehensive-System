import React from 'react';
import { Row, Col, Badge, Icon } from 'antd';

import '../less/ManagementGameListCard.less'

export default class ManagementGameList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className='ManagementGameListCard-Content'>
                <div className='ManagementGameListCard-title'><span>计算机基础知识大赛</span></div>
                <div className='ManagementGameListCard-container'>
                    <Row>
                        <Col><div>开始时间: <span>2018-04-24 18:00:00</span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>开始时间: <span>2018-04-24 18:00:00</span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>比赛状态: <span><Badge color="gray" text="已结束" /></span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>比赛地点: <span>计算机学科楼101</span></div></Col>
                    </Row>
                    <div className='ManagementGameListCard-icon'>
                        <span className='ManagementGameListCard-iconitem'><Icon type="home" theme="filled"/></span>
                        <span className='ManagementGameListCard-iconitem'><Icon type="edit" theme="filled" onClick={this.props.showDrawer}/></span>
                        <span className='ManagementGameListCard-iconitem'><Icon type="setting" theme="filled" /></span>
                    </div>
                </div>
            </div>
        )
    }
}