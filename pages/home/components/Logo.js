import React from 'react';
import '../styles/logo.less';
import { Icon } from 'antd';
import { LOGO_URL } from '../store/constants';

class Logo extends React.Component{
  render(){
    return (
      <div className="logo">
        <div className="container">
          <img src={ LOGO_URL }></img>
          <button>Learn More</button>
        </div>
        <Icon type="down" />
      </div>
    )
  }
}
export default Logo