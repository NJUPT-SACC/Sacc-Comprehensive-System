import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../../../../store'

import CodingHomeHeader from '../components/Header'
import CodingQuestionList from './questionList'
import CodingPieChart from './PieChart'
import Util from '../../../../utli/utli'

import './index.less'

const utli = new Util();

class Home extends React.Component {

  componentDidMount() {
    const english = localStorage.getItem("assignmentEnglish");
    this.props.setCodingListParam(english);
  }

  render() {
    return (
      <div className="coding_home_container">
        <CodingHomeHeader />
        <div className="question_list_container">
          <CodingQuestionList />
          <CodingPieChart />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCodingListParam (param) {
    dispatch(actionCreators.onSetCodingListParam(param))
  }
});

export default connect(null, mapDispatchToProps)(Home)