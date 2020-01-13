import React from 'react';

import {ManagemenGameimportUI} from '../../containers/Game/index'

/**
 * @author wwqin
 * @description 添加比赛部分
 */
export default class ManagemenGameimport extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      current:0,
      error:'',
      fromTable:{
        Name:'',
        List:['0-0-0'],
        Place:'',
        StartTime:'',
        EndTime:'',
        Content:''
      }
    }
  }

  changeName = e =>{
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Name:e.target.value
      }
    })
  };

  changeContent = e => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Content:e.target.value
      }
    })
  };

  changePlace = e => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Place:e.target.value
      }
    })
  }
  
  changeStartTime = e => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        StartTime:e.target.value
      }
    })
  }

  changeEndTime = e => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        EndTime:e.target.value
      }
    })
  }

  onCheck = () =>{
      if(this.state.fromTable.Name=='')
      {
          this.setState({ current:0,error:'error' });
          return;
      }
      else
          this.setState({ current:1,error:'' });
      if(this.state.fromTable.Place=='')
      {
          this.setState({ current:1,error:'error' });
          return;
      }
      else
          this.setState({ current:2,error:'' });
      if(this.state.fromTable.Time=='')
      {
          this.setState({ current:2,error:'error' });
          return;
      }
      else
          this.setState({ current:3,error:'' });
      if(this.state.fromTable.Content=='')
      {
          this.setState({ current:3,error:'error' });
          return;
      }
      else
          this.setState({ current:4,error:'' });
      if(this.state.fromTable.List=='')
      {
          this.setState({ current:4,error:'error' });
          return;
      }
      else
          this.setState({ current:5,error:'' });
  };

  onChange = e => {
      this.setState({
          fromTable:{
              ...this.state.fromTable,
              List:e.target.value
          } 
          });
  };

  render(){
    return  <ManagemenGameimportUI
              current={this.state.current}
              error={this.state.error}
              fromTable={this.state.fromTable}
              changeName={this.changeName}
              changeContent={this.changeContent}
              changePlace={this.changePlace}
              changeStartTime={this.changeStartTime}
              changeEndTime={this.changeEndTime}
              onCheck={this.onCheck}
              onChange={this.onChange}
            />
  }
}