import React from 'react';
import '../styles/footer.less';
import { BackTop } from 'antd';

class Footer extends React.Component{

  render(){
    return (
      <footer>
        <span>©2019 SACC All Rights Reserved</span>
        <BackTop />
      </footer>
    )
  }
}

export default Footer




