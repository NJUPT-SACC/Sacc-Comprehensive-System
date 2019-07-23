import React from 'react';
import '../less/list.less';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Router from 'next/router'


const listItems = [
  {
    IconUrl: 'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
    tag: 'cm',
    dec: 'xxxxxx',
    name: '比赛系统',
    id: 0,
    routerUrl:'/competition'
  },
  {
    IconUrl: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
    tag: 'ex',
    dec: 'xxxxxx',
    name: '练习系统',
    id: 1,
    routerUrl:'/assignment'
  },
  {
    IconUrl: 'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
    tag: 'person',
    dec: 'xxxxxx',
    name: '个人中心',
    id: 2,
    routerUrl:'/personcenter'
  }
];

class List extends React.Component{

  render(){
    return (
      <div className="Homelist" >
        <p id="Homelist-title">系统入口</p>
        <Row type="flex" justify="space-around" id="Homelist">
          {
            listItems.map(item => 
            <Col span={4} key={item.id}>
              <img className={item.tag} onClick={() => Router.push(`${item.routerUrl}`)} src={item.IconUrl}  ></img>
                <p className={item.tag} onClick={() => Router.push(`${item.routerUrl}`)}>{item.name}</p>
                <p className={item.tag} id="dec">{item.dec}</p>
            </Col>
            )
          }
        </Row>
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

export default connect(mapStateToProps,mapDispatchToProps)(List);