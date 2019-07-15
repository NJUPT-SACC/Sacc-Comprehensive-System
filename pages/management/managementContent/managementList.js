import React from 'react';
import { connect } from 'react-redux';
import { Layout, Breadcrumb, Select, Form, Switch, Icon, Checkbox, Input, Button, Slider, Steps, Divider} from 'antd';



const { Option } = Select;
const { TextArea } = Input;
const { Step } = Steps;

class ManagementList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Selects:['','','',''],
            isCheckbos:false,
            current:0
        }
        this.changeCheck = this.changeCheck.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    changeCheck() {
        this.setState({
            isCheckbos:!this.state.isCheckbos
        })
    }

    addItem() {
        let select = this.state.Selects;
        select.push('');
        this.setState({
            Selects:select
        })
    }

    deleteItem() {
        let select = this.state.Selects;
        select.splice(select.length - 1,1);
        this.setState({
            Selects:select
        })
    }

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
      };
    
    componentDidMount(){
        this.$el = this.el
        console.log(this.$el)
    }

    render(){
        const { Content } = Layout;
        const itemtype = ["算法","Python","JavaScript","Java"];
        const { current } = this.state;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Layout style={{ padding: '0 24px 24px'}} ref={el => this.el = el}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>题库</Breadcrumb.Item>
                <Breadcrumb.Item>{this.props.content}</Breadcrumb.Item>
                </Breadcrumb>
                <Content
                style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight:'auto'
                }}
                >
                    <Steps current={current} onChange={this.onChange}>
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
                            <Input placeholder="请输入题目名称" />
                        </Form.Item>
                        <Form.Item label="题目类型" hasFeedback>
                            <Select placeholder="请输入题目类型">
                                {itemtype.map((item,index) => <Option key={index} value={item}>{item}</Option>)}
                            </Select>
                        </Form.Item>
                        <Form.Item label="是否为多选题" hasFeedback>
                            <Switch
                            checkedChildren={<Icon type="check" />}
                            unCheckedChildren={<Icon type="close" />}
                            onChange={this.changeCheck}
                            />
                        </Form.Item>
                        <Form.Item label="题目内容" hasFeedback>
                            <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item label="选项及答案" hasFeedback>
                            {this.state.Selects.map((item) => <span><Checkbox style={{width:'15vw'}}></Checkbox><Input placeholder="请输入选项内容" /></span>)}
                            <Button type="dashed" onClick={this.addItem} style={{ width: '20%',marginRight:'2vw' }}>
                                <Icon type="plus" /> Add field
                            </Button>
                            <Button type="dashed" onClick={this.deleteItem} style={{ width: '20%' }}>
                                <Icon type="line" /> remove field
                            </Button>
                        </Form.Item>
                        <Form.Item label="题目分数及难度" hasFeedback>
                            <Slider marks={{0: '入门',20: '了解',40: '掌握',60: '熟练',80: '精通',100: 'God'}}/>
                        </Form.Item>
                        
                    </Form>
                </Content>
            </Layout>
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
export default connect(mapStateToProps,mapDispatchToProps)(ManagementList);