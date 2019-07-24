import React from 'react';
import '../less/technologyStack.less'

const technologyList = [
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  } , {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
  },
  {
    icon:'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png'
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
                technologyList.map(item => <li><img src={item.icon}></img> </li>)
              }
            </ul>
          </div>
      </div>
    )
  }
}

export default TechnologyStack