import React from 'react';
import { Layout, Breadcrumb } from 'antd';

export const ManagementHome = props =>{
  const { Content } = Layout;
  return (
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>操作日志</Breadcrumb.Item>
      </Breadcrumb>
      <Content
      style={{
        background: '#fff',
        padding: 24,
        margin: 0,
        minHeight: 280,
      }}
      >
      {props.content}
      </Content>
    </Layout>
  )
}