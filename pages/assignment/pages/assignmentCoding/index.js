import React from 'react'
import Util from '../../utli/utli'

const utli = new Util();

class AssignmentCoding extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      param: ""
    }
  }
  componentDidMount() {
    this.setState({
      param: utli.getUrlParam("type")
    })
  }

  render () {
    if (this.state.param) {
      console.log(this.state.param);
    }
    return (
      <div className="assignment_coding" >12312312321</div>
    )
  }
}


export default AssignmentCoding