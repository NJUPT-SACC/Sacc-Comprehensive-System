import React from 'react';
import '../less/TechnologyStackList.less';

const StackList = [
  {
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:0
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:1
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:2
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:3
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:4
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    technologyName:'JavaScript',
    usersNum: 21,
    id:5
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
        technologyName:'JavaScript',
    usersNum: 21,
    id:6
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
        technologyName:'JavaScript',
    usersNum: 21,
    id:7
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
        technologyName:'JavaScript',
    usersNum: 21,
    id:8
  },{
    imgUrl:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
        technologyName:'JavaScript',
    usersNum: 21,
    id:9
  }
]

class TechnologyStackList extends React.Component{
  render(){
    return (
      <div className="TechnologyStackList">
         <div className="TechnologyStackTitle">
          <p id="TechnologyStack-tree">技术栈</p>
        </div>
        <ul>
          {
            StackList.map(item => 
              <li key={item.id}>
                <div className="technologyStackList-imgBox">
                  <img src={item.imgUrl}></img>     
                </div>
                <div className="technologyStackList-des">
                  <p>{item.technologyName}</p>
                  <p>使用人数：{item.usersNum}</p>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default TechnologyStackList