import React from 'react';
import '../less/GroupList.less';

const  GroupListItems = [
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    tag: '前端组',
    dec: '我们是网站的艺术总监，只写有情怀的代码。我们是科协的颜值担当，只做有情调的码农欢迎加入前端开发组~',
    id: 0
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/java.png',
    tag: '后端组',
    dec: '后端组使用Java语言进行后端开发，处理前端发送的各种请求。',
    id: 1
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/python.png',
    tag: 'Python组',
    dec: 'Life is short，you need Python。python组旨在带领大家领略python的简洁优雅，找到适合自己的方向',
    id: 2
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E7%AE%97%E6%B3%95.png',
    tag: '算法组',
    dec: '算法是一个计算的具体步骤，常用于计算、数据处理和自动推理。其在计算机这个行业中无处不在。',
    id: 3
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E5%AE%89%E5%85%A8.png',
    tag: '安全组',
    dec: '安全组是由一群对黑客技术感兴趣的年轻人组成的兴趣团体。',
    id: 4
  },
  {
    IconUrl: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E6%B8%B8%E6%88%8F.png',
    tag: '游戏组',
    dec: '两个人，一个组。简单却暗藏玄机，广泛涉猎各种语言，加入我们、一起在编程的路上斩妖除bug！',
    id: 5
  },
];

class GroupList extends React.Component{

  render(){
    return (
      <div className="HomeGroup-list">
        <div className="HomeGroup-list-title">
          <p id="HomeGroup-list-title">SACC技术部门</p>
          <p id="HomeGroup-list-dec">基于南京邮电大学计软网安院科协</p>
        </div>
        <div className="HomeGroup-list-items">
          <ul>
            {
              GroupListItems.map(item => 
              <li key={item.id}>
                <div className="HomeimgBox">
                  <img src={item.IconUrl}></img>
                </div>
                <div className="HomedecBox">
                  <p className="Hometag">{item.tag}</p>
                  <p className="Homedec">{item.dec}</p>
                </div>
              </li>
              )
            }
          </ul>
        </div>
        <footer>©2019 SACC All Rights Reserved</footer>
      </div>
    )
  }
}

export default GroupList




