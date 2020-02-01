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

const receiveTopic = (competitionTopicList) => ({
  type: constants.COMPETITION_RECEIVE_TOPIC_LIST,
  competitionTopicList
})

export const changeShow = (showList) => ({
  type: constants.COMPETITION_CHANGE_SHOW_LIST,
  showList
})

export const changeShowPages = (showPages,competitionId) => ({
  type: constants.COMPETITION_CHANGE_SHOW_PAGES,
  showPages,
  competitionId
})

export const nextTopic = (topicId) => ({
  type: constants.COMPETITION_NEXT_TOPIC,
  topicId
})

export const changeOptions = (codeMirrorOptions) => ({
  type: constants.COMPETITION_CHANGE_OPTIONS,
  codeMirrorOptions
})

export const showEachRankList = (competitionEachRankListId) => ({
  type: constants.COMPETITION_EACH_RANK_LIST,
  competitionEachRankListId
})

export const receiveTopicList = () =>{
  return (dispatch) => {
    axios.get('http://139.155.83.63:3000/mock/13/competition/query/')
    .then(res =>{
      console.log(res.data.data);
      dispatch(receiveTopic(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}

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