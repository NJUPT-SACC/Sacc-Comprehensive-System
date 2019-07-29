import React from 'react';
import '../less/technologyStack.less'

const technologyList = [
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:0
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:1
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:2
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:3
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:4
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:5
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:6
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:7
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:8
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:9
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:10
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:11
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:12
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:13
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:14
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:15
  } , {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:16
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:17
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:18
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:19
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:20
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    id:21
  }
]

class TechnologyStack extends React.Component{
  render(){
    return (
      <div className="technology-stack">
        <div className="technology-stack-title">
          <p id="technology-stack">使用的技术</p>
          <span id="technologyNum">7</span>
        </div>
          <div className="technologyList">
            <ul>
              {
                technologyList.map(item => <li key={item.id}><img src={item.icon}></img> </li>)
              }
            </ul>
          </div>
      </div>
    )
  }
}

export default TechnologyStack