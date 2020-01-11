import React from 'react';

import {ManagementGameListUI} from "../../containers/Game";

export default class ManagementGameList extends React.Component{
  constructor(props){
    super(props);
    this.state={
      visible: false
    }
  }
  
  showDrawer = () => {
      this.setState({
          visible: true,
      });
  };
  
  onClose = () => {
      this.setState({
          visible: false,
      });
  };

  render(){
    return <ManagementGameListUI 
              visible={this.state.visible}
              showDrawer={this.showDrawer}
              onClose={this.onClose} 
            />
  }
}