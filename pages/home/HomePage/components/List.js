import React from 'react';
import '../less/list.less';
import { connect } from 'react-redux';
import Router from 'next/router';
import { actionCreators } from '../../store';


const listItems = [
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%A5%96%E6%9D%AF.png',
    tag: 'cm',
    name: '比赛系统',
    id: 0,
    routerUrl:'/competition'
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%BB%83%E4%B9%A0%20%281%29.png',
    tag: 'ex',
    name: '练习系统',
    id: 1,
    routerUrl:'/assignment'
  }
];

class List extends React.Component{
  constructor(props){
    super(props)
  }

  changeImg = () => {
    switch (this.props.BasicInformationList[8].value){
      case '男':
        return 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%94%B7%E5%AD%A9%20-%20%E5%89%AF%E6%9C%AC.png';
      case '女':
        return 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%A5%B3%E5%AD%A9%20-%20%E5%89%AF%E6%9C%AC.png';
      default:
        return 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%B0%8F%E4%BA%BA.png';
    }
  }

  render(){
    return (
      <div className="Homelist" >
          {
            this.props.roles = 'issuer' || 'administrator'?
            <ul>
              <li key="" onClick={() => Router.push('/management')}>
                <img className='person' src="https://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%A1%E7%90%86%E5%91%98.png"  ></img>
                <p className='person'>后台管理</p>
              </li> 
            </ul>
            :
            this.props.roles = 'team' ?
            <ul>
              <li key="2" onClick={() => Router.push('/personcenter')}>
                  <img className='person' src="http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%A5%96%E6%9D%AF.png"  ></img>
                  <p className='person'>比赛系统</p>
              </li>
            </ul>
            :
            <ul>
              {
                listItems.map(item => 
                  <li key={item.id} onClick={() => Router.push(`${item.routerUrl}`)}>
                    <img className={item.tag} src={item.IconUrl} ></img>
                      <p className={item.tag}> {item.name} </p>
                  </li>
                )
              }
              <li key="2" onClick={() => Router.push('/personcenter')}>
                <img className='person' src={this.changeImg()}  ></img>
                <p className='person'>个人中心</p>
              </li>
            </ul>
          }
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    BasicInformationList: state.home.BasicInformationList,
    roles: state.home.roles
	}
}

const mapDispatchToProps = (dispatch) => {
	return {

	}
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
