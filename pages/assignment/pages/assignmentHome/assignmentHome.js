import React from 'react'
import AssignmentContent from './components/Content'
import './assignmentHome.less'
import { connect } from 'react-redux'

class AssignmentHome extends React.Component {

  constructor (props) {
    super(props)
  }
  componentWillReceiveProps (nextProps, nextContext) {
    const { english } = nextProps;
    console.log("english: ", english);
    if (typeof english !== 'undefined' && english ) {
      localStorage.setItem("assignmentEnglish", english)
    }
  }

  render () {
    return (
      <AssignmentContent />
    )
  }
}

const mapStateToProps = (state) => ({
  english: state.getIn(["assignment", "english"])
});

export default connect(mapStateToProps, null)(AssignmentHome)