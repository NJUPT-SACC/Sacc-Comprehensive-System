import React from 'react';
import { Select, Form, Switch, Icon, Checkbox, Input, Button, Slider, Steps, Divider, Layout, Breadcrumb} from 'antd';

import ManagementListRadio from '../../components/List/ManagementListImport'
import ManagementListTable from '../../components/List/ManagementListTable'

export const ManagementList = props => {
  const { Content } = Layout;
  return (
    <Layout style={{ padding: '0 24px 24px'}}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>题库</Breadcrumb.Item>
      <Breadcrumb.Item>{props.content}</Breadcrumb.Item>
      </Breadcrumb>
      <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight:'auto'
      }}
      >
      {props.content=='导入题目'?<ManagementListRadio />:<ManagementListTable />}
      </Content>
    </Layout>
  )
}

export const ManagementListRadioUI = props =>{
  const { Option } = Select;
  const { TextArea } = Input;
  const { Step } = Steps;
  const itemtype = ["算法","Python","JavaScript","Java"];
  const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
  };
  return (
    <div>
      <Steps current={props.current} status={props.error}>
        <Step title="Step 1" description="题目名称." />
        <Step title="Step 2" description="题目类型." />
        <Step title="Step 3" description="是否为多选题." />
        <Step title="Step 4" description="题目内容." />
        <Step title="Step 5" description="选项及答案." />
        <Step title="Step 6" description="题目分数及难度." />
      </Steps>
      <Divider />
      <Form {...formItemLayout}>
        <Form.Item label="题目名称" hasFeedback>
          <Input placeholder="请输入题目名称" onChange={props.changeName} value={props.fromTable.Name} onBlur={props.onCheck}/>
        </Form.Item>
        <Form.Item label="题目类型" hasFeedback>
          <Select placeholder="请输入题目类型" onChange={props.changeType} value={props.fromTable.type}  onBlur={props.onCheck}>
            {itemtype.map((item,index) => <Option key={index} value={item}>{item}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item label="是否为多选题" hasFeedback>
          <Switch
          checkedChildren={<Icon type="check" />}
          unCheckedChildren={<Icon type="close" />}
          onChange={props.changeCheck}
          onBlur={props.onCheck}
          />
        </Form.Item>
        <Form.Item label="题目内容" hasFeedback>
          <TextArea rows={4} onChange={props.changeContent} value={props.fromTable.Content}  onBlur={props.onCheck}/>
        </Form.Item>
        <Form.Item label="选项及答案" hasFeedback>
          {props.fromTable.Selects?props.fromTable.Selects.map((item,_index) => <span>
              <Checkbox index={_index} onChange={(e)=>props.changeAnswer(_index,e)} value={props.fromTable.answers[_index]} onBlur={props.onCheck}></Checkbox>
              <Input index={_index} placeholder="请输入选项内容" value={item} onChange={(e)=>props.changeItem(_index,e)} />
          </span>):''}
          <Button type="dashed" onClick={props.addItem} style={{ width: '20%',marginRight:'2vw' }}>
              <Icon type="plus" /> Add field
          </Button>
          <Button type="dashed" onClick={props.deleteItem} style={{ width: '20%' }}>
              <Icon type="line" /> remove field
          </Button>
        </Form.Item>
        <Form.Item label="题目分数及难度" hasFeedback>
          <Slider min={1} max={10} value={props.fromTable.Score[0]} onChange={props.changeScore} marks={{2: '入门',4: '了解',6: '掌握',8: '熟练',10: '精通'}}  onBlur={props.onCheck}/>
        </Form.Item>
        <Button type="primary" style={{left:'50%',transform:'translateX(-50%)'}}>确认提交</Button>
      </Form>
    </div>      
  )
}