import React from 'react'
import { useRouter } from 'next/router';

class AssignmentCoding extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps,nextContext)
  }

  componentDidMount() {
    // console.log(this.$route.params.type);

  }

  render () {
    return (
      <div className="assignment_coding" >12312312321</div>
    )
  }
}


export default AssignmentCoding