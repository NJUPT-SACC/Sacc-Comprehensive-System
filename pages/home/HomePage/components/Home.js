import { Carousel } from 'antd';
import React from 'react';
import GroupList from './GroupList';
import Login from './Login'
import '../less/Home.less'
class Home extends React.Component {
  state = {
    dotPosition: 'left',
  };

  render() {
    const { dotPosition } = this.state;
    return (
        <Carousel dotPosition='left'>
          <Login/>
          <GroupList/>
        </Carousel>
    );
  }
}

export default Home