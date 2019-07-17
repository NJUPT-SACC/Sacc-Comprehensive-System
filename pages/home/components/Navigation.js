import React from 'react';
import '../styles/navigation.less'

class Navigation extends React.Component{
  render(){
    return (
      <div className="navigation">
        <div className="navigation-left fl">
          <span>SACC</span>
        </div>
        <div className="navigation-right fr">
          <ul>
            <li>导航一</li>
            <li>导航二</li>
            <li>导航三</li>
            <li>导航四</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Navigation