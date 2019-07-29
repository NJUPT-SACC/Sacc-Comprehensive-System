import React from 'react';
import '../less/list.less';
import { connect } from 'react-redux';
import Router from 'next/router';


const listItems = [
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%A5%96%E6%9D%AF.png',
    tag: 'cm',
    dec: 'xxxxxx',
    name: '比赛系统',
    id: 0,
    routerUrl:'/competition'
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%BB%83%E4%B9%A0%20%281%29.png',
    tag: 'ex',
    dec: 'xxxxxx',
    name: '练习系统',
    id: 1,
    routerUrl:'/assignment'
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%B0%8F%E4%BA%BA.png',
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
        <ul>
          {
            listItems.map(item => 
            <li key={item.id}>
              <img className={item.tag} onClick={() => Router.push(`${item.routerUrl}`)} src={item.IconUrl}  ></img>
                <p className={item.tag} onClick={() => Router.push(`${item.routerUrl}`)}>{item.name}</p>
                <p className={item.tag} id="dec">{item.dec}</p>
            </li>
            )
          }
        </ul>
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