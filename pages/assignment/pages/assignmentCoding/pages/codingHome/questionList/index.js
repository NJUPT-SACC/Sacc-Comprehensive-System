import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../../../../store'
import Pagination from "./components/pagination";
import Router from 'next/router'
import Loading from '../../../../../../components/loading/loading.js'

import './index.less'

class List extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      pageList: []
    }
  }

  getListArea () {
    const { questionList, currentPage } = this.props;
    const pageList = [];
    if (questionList.length) {
      for (let i = (currentPage - 1) * 10; i < currentPage * 10; i++) {
        pageList.push(questionList[i]);
      }
    } else {
    }
    return (
      pageList.map(item => {
        if (typeof item !== 'undefined') {
          return (
            <div key={item.id} className="list_row">
              <span>{item.id}</span>
              <span className="item_title" onClick={() => {this.startCoding(item)}}>{item.title}</span>
              <span
                style={{
                  borderColor: item.difficulty === '中等' ? '#f0ad4e' : item.difficulty === '困难' ? '#d9534f' : '#5cb85c',
                  backgroundColor: item.difficulty === '中等' ? '#f0ad4e' : item.difficulty === '困难' ? '#d9534f' : '#5cb85c'
                }}
              >{item.difficulty}</span>
              <span>{item.type}</span>
              <span></span>
              {
                item.finish ?
                  <span className="iconfont">&#xe6ae;</span>
                  : ''
              }
            </div>
          )
        }
      })
    )
  }

  startCoding ({ id, type }) {
    const encodeType = encodeURIComponent(type);
    Router.push({
      pathname: '/assignment/question',
      query: {
        type: encodeType,
        id
      }
    });
  }

  componentDidMount() {
    this.props.getQuestionList();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (typeof nextProps.questionList !== 'undefined') {
      this.setPagination(nextProps);
    }
  }

  setPagination ({ questionList }) {
    const pages = Math.ceil(questionList.length / 10);
    this.props.setTotalPage(pages);
  }

  render() {
    const { currentPage, totalPage } = this.props;
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
                this.getListArea()
              }
              {
                currentPage === totalPage && totalPage > 1 ?
                  <div className="void">
                    <span className="iconfont">&#xe709;</span>
                    <span>没有更多题目了</span>
                  </div>
                  : ''
              }
            </div>
            <Pagination />
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionList: state.assignment.questionList,
  totalPage: state.assignment.totalPage,
  currentPage: state.assignment.currentPage,
  currentEnglish: state.assignment.english,
  currentQuestion: state.assignment.currentQuestion
});

const mapDispatchToProps = (dispatch) => ({
  getQuestionList () {
    dispatch(actionCreators.getQuestionList())
  },
  setTotalPage (totalPage) {
    dispatch(actionCreators.setTotalPage(totalPage))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List)