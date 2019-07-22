import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Table, Divider, Tag, Icon} from 'antd';
import { actionCreators } from '../../store'


  
const data = [
    {
        id: '0',
        Name: '123',
        type: 'C++',
        Content: '123',
        Selects: ['1', '2', '3', '4'],
        isCheckbos: false,
        answers: [true, false, false, false],
        Score: '入门',
        Grade: 1
      }, {
        id: '1',
        Name: '234',
        type: 'Python',
        Content: '234',
        Selects: ['1', '2', '3', '4'],
        isCheckbos: false,
        answers: [false, true, false, false],
        Score: '了解',
        Grade: 3
      }, {
        id: '2',
        Name: '345',
        type: '算法',
        Content: '345',
        Selects: ['1', '2', '3', '4'],
        isCheckbos: false,
        answers: [false, false, true, false],
        Score: '精通',
        Grade: 9
      }
  ];

class ManagementListTable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible: false
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
        this.props.receiveItem()
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render(){
      const columns = [
        {
          title: '#',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: '题目名称',
          dataIndex: 'Name',
          key: 'Name',
          width: 800,
          render: text => <a href="javascript:;" onClick={this.showModal}>{text}</a>,
        },
        {
          title: '题目类型',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: '难度',
          key: 'Score',
          dataIndex: 'Score',
          render: Score => (
            <span>
                {(()=>{
                    switch(Score){
                        case '入门': return <Tag color='green'>{Score}</Tag>
                        case '了解': return <Tag color='cyan'>{Score}</Tag>
                        case '掌握': return <Tag color='geekblue'>{Score}</Tag>
                        case '熟练': return <Tag color='volcano'>{Score}</Tag>
                        case '精通': return <Tag color='magenta'>{Score}</Tag>
                    }
                })()}
            </span>
          ),
        },
        {
          title: '分数',
          key: 'Grade',
          dataIndex: 'Grade',
        },
      ];
        return (
            <div>
                <Table columns={columns} dataSource={this.props.fromTableList} />
                <Modal
                title={this.props.fromTableItem.Name}
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                >
                    <h2>{this.props.fromTableItem.Content}</h2>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }

    componentDidMount(){
        this.props.receiveList();
        this.props.receiveItem();
    }
}
const mapStateToProps = (state) =>{
	return {
    fromTableList:state.getIn(['management','fromTableList']),
    fromTableItem:state.getIn(['management','fromTableItem'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    receiveList(){
      dispatch(actionCreators.receiveList());
    },
    receiveItem(){
      dispatch(actionCreators.receiveItem());
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagementListTable);