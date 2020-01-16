import { constants } from './index'
import axios from 'axios';

const showList = (competitionList) => ({
  type: constants.COMPETITION_RECEIVE_LIST,
  competitionList
})

const showEachRankList = (competitionEachRankList) => ({
  type: constants.COMPETITION_RECEIVE_EACH_RANK_LIST,
  competitionEachRankList
})

export const receiveList = () =>{
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5e205687e1c2cf1d346e0df0/getPersonalList')
    .then(res =>{
      console.log(res.data.data);
      dispatch(showList(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const receiveEachRankList = () =>{
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5e205687e1c2cf1d346e0df0/getEachRank')
    .then(res =>{
      console.log(res.data.data);
      dispatch(showEachRankList(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}