import React from 'react';
import { Descriptions, Row, Col, Badge, Icon, Drawer, Divider, Input, Select, Form, Button, Steps, Layout, Breadcrumb } from 'antd';

import ManagementGameimport from '../../components/Game/ManagementGameimport'
import ManagementGameList from '../../components/Game/ManagementGameList'

export const ManagementGame = props =>{
  const { Content } = Layout;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      {props.show=='比赛详情'?
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>比赛系统</Breadcrumb.Item>
        <Breadcrumb.Item>比赛列表</Breadcrumb.Item>
        <Breadcrumb.Item>比赛详情</Breadcrumb.Item>
      </Breadcrumb>
      :<Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>比赛系统</Breadcrumb.Item>
        <Breadcrumb.Item>{props.content}</Breadcrumb.Item>
      </Breadcrumb>}
      <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight:'auto'
      }}
      >
      {props.content=='举办比赛'?<ManagementGameimport/>:props.content=='比赛列表'?<ManagementGameList/>:<ManagementGameDetails/>}
      </Content>
    </Layout>
  )
}

export const ManagementGameDetails = (props) =>{
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

export const ManagementGameListCard = (props) => {
  const didcolor = {background: 'linear-gradient(#F2F2EF,#EDE9E4)'};
  const willcolor = {background: 'linear-gradient(#fffc43, #ffd479)'};
  const doingcolor = {background: 'linear-gradient(#6DC048,#BDD1B3)'};
  return (
    <div className='ManagementGameListCard-Content' style={props.did=='已结束'?didcolor:props.did=='正在进行'?doingcolor:willcolor}>
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
            <span className='ManagementGameListCard-iconitem'><Icon type="home" theme="filled" onClick={props.changeShow}/></span>
            <span className='ManagementGameListCard-iconitem'><Icon type="edit" theme="filled" onClick={props.showDrawer}/></span>
            <span className='ManagementGameListCard-iconitem'><Icon type="setting" theme="filled" /></span>
          </div>
        </div>
        <style jsx>{`
        .ManagementGameListCard-Content{
            border-style: solid;
            border-width: 1px;
            border-color: rgba(199, 188, 191, .5);
            background: linear-gradient(#F2F2EF,#EDE9E4);
            border-radius: 10px;
            height: 15rem;
            margin: .4rem;
            flex-basis:19rem;
            position: relative;
            animation: ManagementGameListCard-animation 1s;
            box-shadow: #c3c3c3 9px 9px 10px 0px;
            transition: all .2s;
            .ManagementGameListCard-title{
                font-size: 1.2rem;
                height: 3rem;
                text-align: center;
                margin:auto;
                display: flex;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                border-bottom-color: rgba(199, 188, 191, .5);
                span{
                    margin:auto;
                }
            }
            .ManagementGameListCard-container{
                padding: .5rem;
                font-size: 1.1rem;
                position: relative;
                height: 12rem;
                .ManagementGameListCard-icon{
                    display: inline-block;
                    position: absolute;
                    bottom: 3px;
                    right: 3px;
                    .ManagementGameListCard-iconitem{
                        font-size:16px;
                        cursor: pointer;
                        margin: 5px;
                        :hover{
                            opacity: .8;
                        }
                    }
                }
            }
        }
        
        .ManagementGameListCard-Content:hover{
            transform: scale(1.02,1.02);
            box-shadow: #c3c3c3 3px 3px 10px 0px;
        }
        @keyframes ManagementGameListCard-animation{
            0%{
                transform: scale(0,0);
            }
            70%{
                transform: scale(1.02,1.02);
            }
            100%{
                transform: scale(1,1);
            }
        }
        `}</style>
    </div>
  )
    
}

export const ManagementGameListUI = (props) => {
  const { Search } = Input;
  const isDid = Date.now()>new Date("2019-9-21 14:50:00")?'已结束':Date.now()>new Date("2019-8-21 14:50:00")?'正在进行':'未开始'
  return (
    <div style={{display:'flex',flex:'auto',flexWrap:'wrap'}}>
      <Search placeholder="请输入搜索内容" onSearch={value => console.log(value)} enterButton/>
      <Divider />
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='正在进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='未进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='未进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='正在进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='正在进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='未进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='正在进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='正在进行'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
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

export const ManagemenGameimportUI = (props) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const { Step } = Steps;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
  }
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  return (
    <div>
      <Steps current={props.current} status={props.error}>
        <Step title="Step 1" description="比赛名称." />
        <Step title="Step 2" description="比赛地点." />
        <Step title="Step 3" description="比赛时间." />
        <Step title="Step 4" description="注意事项." />
        <Step title="Step 5" description="题目列表." />
      </Steps>
      <Divider />
        <Form {...formItemLayout}>
          <Form.Item label="比赛名称" hasFeedback>
            <Input placeholder="请输入比赛名称" onChange={props.changeName} value={props.fromTable.Name} onBlur={props.onCheck}/>
          </Form.Item>
          <Form.Item label="比赛地点" hasFeedback>
            <Input placeholder="请输入比赛地点" onChange={props.changePlace} value={props.fromTable.Place} onBlur={props.onCheck}/>
          </Form.Item>
          <Form.Item label="比赛时间" hasFeedback>
            <input type='datetime-local' value={props.fromTable.StartTime} style={{height:'1.5rem',borderColor:'#d9d9d9'}} onChange={props.changeStartTime}/>~<input type='datetime-local' value={props.fromTable.EndTime} style={{height:'1.5rem',borderColor:'#d9d9d9'}} onChange={props.changeEndTime}/>
          </Form.Item>
          <Form.Item label="注意事项" hasFeedback>
            <TextArea rows={4} onChange={props.changeContent} value={props.fromTable.Content}  onBlur={props.onCheck}/>
          </Form.Item>
          <Form.Item label="题目列表" hasFeedback>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Please select"
            defaultValue={['a10', 'c12']}
          >
            {children}
          </Select>
          </Form.Item>
          <Button type="primary" style={{left:'50%',transform:'translateX(-50%)'}}>确认提交</Button>
        </Form>
      </div>      
    )
}