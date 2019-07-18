import React from 'react';
import '../styles/list.less';
import { listItems } from '../store/constants';
import { Row, Col } from 'antd';

class List extends React.Component{

  render(){
    return (
      <div className="list" id="list">
        <p id="list-title">系统入口</p>
        <Row type="flex" justify="space-around">
          {
            listItems.map(item => 
            <Col span={4}>
              <img src={item.IconUrl}></img>
                <p className="tag">{item.tag}</p>
                <p className="dec">{item.dec}</p>
            </Col>
            )
          }
        </Row>
      </div>
    )
  }
}

export default List