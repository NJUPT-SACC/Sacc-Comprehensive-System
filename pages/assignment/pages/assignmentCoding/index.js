import React from 'react'

class AssignmentCoding extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps,nextContext)
  }

  static async getInitialProps(context) {
    console.log(context);
    const { type } = context.query;
    return type
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