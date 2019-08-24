import React from 'react';
import '../less/basicInformation.less';
const contactList = [
    {
      contactWay: "官方QQ",
      contactContent: "3159742702"
    },{
      contactWay: "交流群",
      contactContent: "910364039"
    },{
      contactWay: "公众号",
      contactContent: "nyjrwa"
    },{
      contactWay: "主页",
      contactContent: "http://njupt-sacc.com/"
    },{
      contactWay: "邮箱",
      contactContent: "njupt.sacc@outlook.com"
    },{
      contactWay: "Github",
      contactContent: "https://github.com/NJUPT-SACC"
    }
  ]
class contact extends React.Component{
  
  render(){
    return(
      <div className="contact">
        <div className="contactTitle">
          <p id="contact">联系我们</p>
        </div>
        <div className="contactList">
          {
          contactList.map((item,index) => 
          <dl key={index}>
            <dt>{item.contactWay}</dt>
            <dd>{item.contactContent}</dd>
          </dl>)
        }
        </div>

         
      </div>
    )
  }
}

export default contact