import React from 'react';
import '../less/logo.less';
import { Icon } from 'antd';
import { LOGO_URL } from '../../store/constants';

class Logo extends React.Component{
  constructor(props){
    super(props);
    console.log(Logo)
  }
  scrollToAnchor = (anchorName) => {
    let anchorElement = document.getElementById(anchorName);
    anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  render(){
    return (
      <div className="Homelogo">
        <div className="Homecontainer">
          <img src={ LOGO_URL }></img>
        </div>
        <a onClick={() => this.scrollToAnchor('list')}>
          <Icon type="down"/>
        </a> 
      </div>
    )
  }
}

export default Logo