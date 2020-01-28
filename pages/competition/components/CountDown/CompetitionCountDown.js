import React from 'react';
import { connect } from 'react-redux';

import { actionCreators,store } from '../../store';
import { CompetitionCountDownUI } from '../../containers/CountDown/index'

class CompetitionCountDown extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hourA: 0,
      hourB: 0,
      minuteA: 0,
      minuteB: 0,
      secondA: 0,
      secondB: 0,
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.countDown()
    }, 1000);
    
  }

  countDown(){
    let startTime = new Date(),
    endTime = new Date(this.props.competitionAllList[this.props.competitionTopicId].endTime) ;

    let remainTime = endTime.getTime() - startTime.getTime(),
      remainDay = parseInt( remainTime / (60 * 60 * 24 * 1000)),
      Day = parseInt( remainTime ) - parseInt( remainDay * 60 * 60 * 24 * 1000),
      remainHour = parseInt( Day / (60 * 60 * 1000)),
      Hour = Day - remainHour * 60 * 60 * 1000,
      remainMinute = parseInt( Hour / (60 * 1000)),
      remainSecond = parseInt(( remainTime - remainDay * 60 * 60 * 24 * 1000 - remainHour * 60 * 60 * 1000 - remainMinute * 60 * 1000) / 1000);

      remainHour = [...this.dismantling(remainHour)]
      remainMinute = [...this.dismantling(remainMinute)]
      remainSecond = [...this.dismantling(remainSecond)]
      
      this.setState({
        hourA:remainHour[0],
        hourB:remainHour[1],
        minuteA:remainMinute[0],
        minuteB:remainMinute[1],
        secondA:remainSecond[0],
        secondB:remainSecond[1],
      })
  }

  dismantling(num){
    if(num < 10)
      num = (Array(2).join(0) + num);
    return ("" + num).split("")
  }

  render(){
    return (
        <CompetitionCountDownUI
        hourA = {this.state.hourA}
        hourB = {this.state.hourB}
        minuteA = {this.state.minuteA}
        minuteB = {this.state.minuteB}
        secondA = {this.state.secondA}
        secondB = {this.state.secondB}
        />
    )
  }
}

const mapStateToProps = (state) =>{
	return {
    competitionAllList:state.competition.competitionAllList,
    competitionTopicId:state.competition.competitionTopicId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CompetitionCountDown);