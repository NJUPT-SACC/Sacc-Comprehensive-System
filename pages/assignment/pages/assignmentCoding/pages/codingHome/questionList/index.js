import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../../../../store'
import { Table } from 'antd';

import './index.less'

class List extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.props.getQuestionList();
  }

  render() {
    return (
      <div className="question_list">
        <div className="list_content">
          <main className="list_table">
            <div className="table_header_wrapper">
              <div className="list_table_head">
                <span>序号</span>
                <span>题目名称</span>
                <span>难度</span>
                <span>类型</span>
                <span>完成度</span>
              </div>
            </div>
            <div className="list_body_wrapper">
            {
              this.props.questionList.map(item => {
                return (
                  <div key={item.id} className="list_row">
                    <span>{item.id}</span>
                    <span>{item.title}</span>
                    <span
                      style={{
                        borderColor: item.difficulty === '中等' ? '#f0ad4e' : item.difficulty === '困难' ? '#d9534f' : '#5cb85c',
                        backgroundColor: item.difficulty === '中等' ? '#f0ad4e' : item.difficulty === '困难' ? '#d9534f' : '#5cb85c'
                      }}
                    >{item.difficulty}</span>
                    <span>{item.type}</span>
                    <span></span>
                  </div>
                )
              })
            }
            </div>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionList: state.getIn(["assignment", "questionList"])
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionList () {
    dispatch(actionCreators.getQuestionList())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List)