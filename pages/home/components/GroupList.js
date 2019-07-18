import React from 'react';
import '../styles/GroupList.less';
import { GroupListItems } from '../store/constants';

class GroupList extends React.Component{

  render(){
    return (
      <div className="Group-list">
        <div className="Group-list-title">
          <p id="Group-list-title">SACC技术部门</p>
          <p id="Group-list-dec">基于南京邮电大学计软网安院科协</p>
        </div>
        <div className="Group-list-items">
          <ul>
            {
              GroupListItems.map(item => 
              <li key={item.id}>
                <div className="imgBox">
                  <img src={item.IconUrl}></img>
                </div>
                <div className="decBox">
                  <p className="tag">{item.tag}</p>
                  <p className="dec">{item.dec}</p>
                </div>
              </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default GroupList




