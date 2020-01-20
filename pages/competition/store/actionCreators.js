import { constants } from './index'
import axios from 'axios';

const showList = (competitionList) => ({
  type: constants.COMPETITION_RECEIVE_LIST,
  competitionList
})

const showAllRankList = (competitionAllRankList) => ({
  type: constants.COMPETITION_RECEIVE_ALL_RANK_LIST,
  competitionAllRankList
})

const showAllList = (competitionAllList) => ({
  type: constants.COMPETITION_RECEIVE_ALL_LIST,
  competitionAllList
})

export const changeShow = (show) => ({
  type: constants.COMPETITION_CHANGE_SHOW,
  show
})

export const showEachRankList = (competitionEachRankListId) => ({
  type: constants.COMPETITION_EACH_RANK_LIST,
  competitionEachRankListId
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

export const receiveAllRankList = () =>{
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5e205687e1c2cf1d346e0df0/getAllRank')
    .then(res =>{
      console.log(res.data.data);
      dispatch(showAllRankList(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export const receiveAllList = () =>{
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5e205687e1c2cf1d346e0df0/getAllCompetitionsList')
    .then(res =>{
      console.log(res.data.data);
      dispatch(showAllList(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}