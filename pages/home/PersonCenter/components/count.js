import React from 'react';
import '../less/count.less';

const module = [
  {
    moduleName: 'personCenter-competition',
    icon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    moduleIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    moduleTitle: '参加的比赛',
    rightIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    rightPercent: '83%',
    wrongIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    wrongPercent: '17%'

  },
  {
    moduleName: 'personCenter-practice',
    icon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    moduleIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    moduleTitle: '参加的练习',
    rightIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    rightPercent: '83%',
    wrongIcon: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/js.png',
    wrongPercent: '17%'
  }
]
class Count extends React.Component{
  render(){
    return(
      <div className="personCenter-count">
        <div className="personCenter-count-title">
          <p id="personCenter-count">刷题量</p>
        </div>
        <div className="module">
          {
            module.map(item => 
              <div className={item.moduleName}>
              <div className="module-title">
                <img className="module-icon" src={item.icon}></img>
                <span>{item.moduleTitle}</span>
              </div>
              <div className="module-details">
                <div className="module-right">
                  <img src={item.rightIcon}></img>
                  <span>{item.rightPercent}</span>
                </div>
                <div className="module-wrong">
                  <img src={item.wrongIcon}></img>
                  <span>{item.wrongPercent}</span>
                </div>
              </div>
            </div>
              )
          }
        </div>
      </div>
    )
  }
}
export default Count