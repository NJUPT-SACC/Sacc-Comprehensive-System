import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import dynamic from 'next/dynamic';
import './index.less';

export const CompetitionInvitation = () =>{
  const CompetitionInvitation = dynamic(import('../../components/Invitation/CompetitionInvitation'))

  return (
    <div className="CompetitionInvitation">
        <CompetitionInvitation />
    </div>
  )
}

/**
 * @author HKFPouu
 * @description 展示比赛邀请队友组队的UI部分
 * @param { String } props.competitionName 报名的比赛 名称
 * @param { String }  props.teammateA 队友A的邮箱值
 * @param { String }  props.teammateB 队友B的邮箱值
 * @param { Function }  props.getTeammate 获取队友A B的邮箱值
 * @param { Function }  props.back 返回展示全部比赛的页面
 * @param { Function }  props.submitInvitation 提交全部报名信息
 * 
 */
export const CompetitionInvitationUI = props =>{

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  }
  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  }

  return (
    <div>
      <h2>你正在<span>{props.competitionName}</span>的报名页面</h2>
      <Form layout={'horizontal'}>
        <Form.Item label="队长" {...formItemLayout}>
            <Input value="本人的账户邮箱（后期登录做完补充）"  disabled="true"/>
          </Form.Item>
        <Form.Item label="队友 A" {...formItemLayout}>
          <Input 
            placeholder="队友A的邮箱" 
            value={props.teammateA} 
            onChange={props.getTeammate}
            name="A"/>
        </Form.Item>
        <Form.Item label="队友 B" {...formItemLayout}>
          <Input 
            placeholder="队友B的邮箱" 
            value={props.teammateB} 
            onChange={props.getTeammate}
            name="B"/>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button size="large" onClick={props.back}>返回</Button>
          <Button size="large" onClick={props.submitInvitation}>提交</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
