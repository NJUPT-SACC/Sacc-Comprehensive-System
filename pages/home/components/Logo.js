import React from 'react';
import '../styles/logo.less';
import { Icon } from 'antd';
import { LOGO_URL } from '../store/constants';

class Logo extends React.Component{
  scrollToAnchor = (anchorName) => {
    let anchorElement = document.getElementById(anchorName);
    anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  render(){
    return (
      <div className="logo">
        <div className="container">
          <img src={ LOGO_URL }></img>
          <button>Learn More</button>
        </div>
        <a onClick={() => this.scrollToAnchor('list')}>
          <Icon type="down"/>
        </a> 
      </div>
    )
  }
}
export default Logo