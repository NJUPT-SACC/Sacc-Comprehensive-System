import React from 'react';
import { connect } from 'react-redux';
import { Select, Form, Switch, Icon, Checkbox, Input, Button, Slider, Steps, Divider, InputNumber, TimePicker, TreeSelect} from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

const { SHOW_PARENT } = TreeSelect;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
class ManagemenGameimport extends React.Component{
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

  changeName = value =>{
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Name:value
      }
    })
  };

  changeContent = value => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Content:value
      }
    })
  };

  changePlace = value => {
    this.setState({
      fromTable:{
        ...this.state.fromTable,
        Place:value
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

  onChange = value => {
      this.setState({
          fromTable:{
              ...this.state.fromTable,
              List:value
          } 
          });
  };

  render(){
    const { current } = this.state;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
        <div>
          <Steps current={current} status={this.state.error}>
            <Step title="Step 1" description="比赛名称." />
            <Step title="Step 2" description="比赛地点." />
            <Step title="Step 3" description="比赛时间." />
            <Step title="Step 4" description="注意事项." />
            <Step title="Step 5" description="题目列表." />
          </Steps>
          <Divider />
            <Form {...formItemLayout}>
              <Form.Item label="比赛名称" hasFeedback>
                <Input placeholder="请输入比赛名称" onChange={this.changeName} value={this.state.fromTable.Name} onBlur={this.onCheck}/>
              </Form.Item>
              <Form.Item label="比赛地点" hasFeedback>
                <Input placeholder="请输入比赛地点" onChange={this.changePlace} value={this.state.fromTable.Place} onBlur={this.onCheck}/>
              </Form.Item>
              <Form.Item label="比赛时间" hasFeedback>
                <input type='datetime-local' value={this.state.fromTable.StartTime} style={{height:'1.5rem',borderColor:'#d9d9d9'}} onChange={this.changeStartTime}/>~<input type='datetime-local' value={this.state.fromTable.EndTime} style={{height:'1.5rem',borderColor:'#d9d9d9'}} onChange={this.changeEndTime}/>
              </Form.Item>
              <Form.Item label="注意事项" hasFeedback>
                <TextArea rows={4} onChange={this.changeContent} value={this.state.fromTable.Content}  onBlur={this.onCheck}/>
              </Form.Item>
              <Form.Item label="题目列表" hasFeedback>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['a10', 'c12']}
              >
                {children}
              </Select>
              </Form.Item>
              <Button type="primary" style={{left:'50%',transform:'translateX(-50%)'}}>确认提交</Button>
            </Form>
        </div>      
      )
  }
}
const mapStateToProps = (state) =>{
	return {
		
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagemenGameimport);