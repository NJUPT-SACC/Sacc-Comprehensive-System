import React from 'react';
import { connect } from 'react-redux';
import { Select, Form, Switch, Icon, Checkbox, Input, Button, Slider, Steps, Divider} from 'antd';

const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

class ManagementListRadio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:0,
            error:'',
            fromTable:{
                Name:'',
                type:'',
                Content:'',
                Selects:['','','',''],
                isCheckbos:false,
                answers:[false,false,false,false],
                Score:[0,'容易']
            }
        }
        this.changeCheck = this.changeCheck.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.changeItem = this.changeItem.bind(this);
        this.changeAnswer = this.changeAnswer.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeType = this.changeType.bind(this);
        this.changeContent = this.changeContent.bind(this);
        this.onCheck = this.onCheck.bind(this);
    }

    changeCheck() {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                isCheckbos:!this.state.fromTable.isCheckbos
            }
        })
    }

    addItem() {
        let select = this.state.fromTable.Selects;
        select.push('');
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    deleteItem() {
        let select = this.state.fromTable.Selects;
        select.splice(select.length - 1,1);
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    changeItem(e,index){
        let select = this.state.fromTable.Selects;
        select[index] = e.target.value;
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    changeAnswer(e,index){
        let answer = this.state.fromTable.answers;
        console.log(e.target.checked)
        answer[index] = e.target.checked;
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                answers:answer
            }
        })
        
    }

    changeName(e){
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Name:e.target.value
            }
        })
    }

    changeType(e){
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                type:e
            }
        })
    }

    changeContent(e){
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Content:e.target.value
            }
        })
    }

    changeScore = value => {
        console.log(value)
        let score;
        switch(value){
            case value>=1&&value<2:return score='入门';
            case value>=2&&value<4:return score='了解';
            case value>=4&&value<6:return score='掌握';
            case value>=6&&value<8:return score='熟练';
            case value>=8&&value<=10:return score='精通';
        }
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Score:[value,score]
            }
        })
    }

    onCheck(){
        if(this.state.fromTable.Name=='')
        {
            this.setState({ current:0,error:'error' });
            return;
        }
        else
            this.setState({ current:1,error:'' });
        if(this.state.fromTable.type=='')
        {
            console.log(this.state.fromTable.type)
            this.setState({ current:1,error:'error' });
            return;
        }
        else
            this.setState({ current:2,error:'' });
        if(this.state.fromTable.isCheckbos=='')
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
        let Aflag=false,Sflag=true;
        this.state.fromTable.answers.map((item) => {if(item) Aflag=true});
        this.state.fromTable.Selects.map((item) => {if(!item) Sflag=false});
        if(!Aflag&&!Sflag)
        {
            this.setState({ current:4,error:'error' });
            return;
        }
        else
            this.setState({ current:5,error:'' });
        if(this.state.fromTable.Score=='')
        {
            this.setState({ current:5,error:'error' });
            return;
        }
        else
            this.setState({ current:6,error:'success' });
    }

    render(){
        const itemtype = ["算法","Python","JavaScript","Java"];
        const { current } = this.state;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <div>
                <Steps current={current} status={this.state.error}>
                    <Step title="Step 1" description="题目名称." />
                    <Step title="Step 2" description="题目类型." />
                    <Step title="Step 3" description="是否为多选题." />
                    <Step title="Step 4" description="题目内容." />
                    <Step title="Step 5" description="选项及答案." />
                    <Step title="Step 6" description="题目分数及难度." />
                </Steps>
                <Divider />
                <Form {...formItemLayout}>
                    <Form.Item label="题目名称" hasFeedback>
                        <Input placeholder="请输入题目名称" onChange={(e) => this.changeName(e)} value={this.state.fromTable.Name} onBlur={this.onCheck}/>
                    </Form.Item>
                    <Form.Item label="题目类型" hasFeedback>
                        <Select placeholder="请输入题目类型" onChange={(e) => this.changeType(e)} value={this.state.fromTable.type}  onBlur={this.onCheck}>
                            {itemtype.map((item,index) => <Option key={index} value={item}>{item}</Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item label="是否为多选题" hasFeedback>
                        <Switch
                        checkedChildren={<Icon type="check" />}
                        unCheckedChildren={<Icon type="close" />}
                        onChange={this.changeCheck}
                        onBlur={this.onCheck}
                        />
                    </Form.Item>
                    <Form.Item label="题目内容" hasFeedback>
                        <TextArea rows={4} onChange={(e) => this.changeContent(e)} value={this.state.fromTable.Content}  onBlur={this.onCheck}/>
                    </Form.Item>
                    <Form.Item label="选项及答案" hasFeedback>
                        {this.state.fromTable.Selects?this.state.fromTable.Selects.map((item,_index) => <span>
                            <Checkbox onChange={(e) => this.changeAnswer(e,_index)} value={() => this.state.fromTable.answers[_index]} onBlur={this.onCheck}></Checkbox>
                            <Input placeholder="请输入选项内容" value={item} onChange={(e) => this.changeItem(e,_index)} />
                        </span>):''}
                        <Button type="dashed" onClick={this.addItem} style={{ width: '20%',marginRight:'2vw' }}>
                            <Icon type="plus" /> Add field
                        </Button>
                        <Button type="dashed" onClick={this.deleteItem} style={{ width: '20%' }}>
                            <Icon type="line" /> remove field
                        </Button>
                    </Form.Item>
                    <Form.Item label="题目分数及难度" hasFeedback>
                        <Slider min={1} max={10} value={this.state.fromTable.Score[0]} onChange={this.changeScore} marks={{2: '入门',4: '了解',6: '掌握',8: '熟练',10: '精通'}}  onBlur={this.onCheck}/>
                    </Form.Item>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementListRadio);