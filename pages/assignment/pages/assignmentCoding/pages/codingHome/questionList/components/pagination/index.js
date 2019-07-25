import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../../../../../../store'

import './index.less'

class Pagination extends Component {

  constructor (props) {
    super (props);
    this.state = {
      currentIndex: 0
    }
  }

  handlePageChange (index) {
    this.props.onChangePage(index + 1)
  }

  handlePageSubstance () {
    const { currentPage, onChangePage } = this.props;
    if (currentPage === 1) {
      onChangePage(1);
    } else {
      onChangePage(currentPage - 1);
    }
  }

  handlePageIncrease () {
    const { currentPage, onChangePage, totalPage } = this.props;
    if (currentPage === totalPage) {
      onChangePage(totalPage);
    } else {
      onChangePage(currentPage + 1);
    }
  }

  render() {
    const paginationArray = new Array(this.props.totalPage);
    const { currentPage } = this.props;
    for (let i = 0; i < paginationArray.length; i++) {
      paginationArray[i] = i + 1;
    }
    return (
      <div className="pagination_container">
        <div className="pagination_inner_container">
          <span
            className="iconfont last_page"
            onClick={() => {this.handlePageSubstance()}}
          >&#xe607;</span>
          <ul className="pagination_body">
            {
              paginationArray.map((item, index) => {
                return (
                  <li
                    key={item}
                    className="pagination_item"
                    onClick={() => {this.handlePageChange(index)}}
                    style={
                      (currentPage - 1) === index ?
                        {backgroundColor: '#dcdcdc', borderColor: '#dcdcdc'}
                        : {}
                    }
                  >
                    <span>{item}</span>
                  </li>
                )
              })
            }
          </ul>
          <span
            className="iconfont next_page"
            onClick={() => {this.handlePageIncrease()}}
          >&#xe60d;</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  totalPage: state.getIn(["assignment", "totalPage"]),
  currentPage: state.getIn(["assignment", 'currentPage'])
});

const mapDispatchToProps = (dispatch) => ({
  onChangePage (page) {
    dispatch(actionCreators.changeCurrentPage(page))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)