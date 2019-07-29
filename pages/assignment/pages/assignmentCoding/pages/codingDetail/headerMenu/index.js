import React from 'react'
import { connect } from 'react-redux'

import './index.less'

class HeaderMenu extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { currentQuestion: { title, difficulty }, questionId } = this.props;
    return (
      <div className="coding_header_menu">
        <div className="left_part">
          <span>{questionId}.</span>
          <span>{title}</span>
          <span
            className="label"
            style={{
              borderColor: difficulty === '中等' ? '#f0ad4e' : difficulty === '困难' ? '#d9534f' : '#5cb85c',
              backgroundColor: difficulty === '中等' ? '#f0ad4e' : difficulty === '困难' ? '#d9534f' : '#5cb85c'
            }}
          >{difficulty}</span>
        </div>
      </div>
    )
  }
}

const  mapStateToProps = state => ({
  currentQuestion: state.getIn(["assignment", "currentQuestion"])
});

export default connect(mapStateToProps, null)(HeaderMenu)