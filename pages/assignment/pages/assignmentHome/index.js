import React from 'react'

import AssignmentHeader from './components/Header'
import AssignmentContent from './components/Content'

import './index.less'

class AssignmentHome extends React.Component {
  render () {
    return (
      <div className="right-wrapper">
        <AssignmentHeader />
        <AssignmentContent />
      </div>
    )
  }
}

export default AssignmentHome