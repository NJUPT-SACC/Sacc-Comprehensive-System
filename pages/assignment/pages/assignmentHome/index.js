import React from 'react'
import AssignmentContent from './components/Content'
import './index.less'
import { connect } from 'react-redux'

class Index extends React.Component {

  constructor (props) {
    super(props)
  }
  render () {
    return (
      <AssignmentContent />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    english: state.assignment.english
  }
};

export default connect(mapStateToProps, null)(Index)