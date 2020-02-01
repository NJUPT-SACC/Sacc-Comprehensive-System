import * as constants from './constants';

const defaultState = {
  competitionList:'',
  competitionAllRankList:'',
  competitionAllList: '',
  showList: '所有比赛',
  competitionEachRankListId: 0,
  competitionTopicList: '',
  competitionId:'',
  topicId: 0,
  codeMirrorOptions:{
    theme: 'eclipse',
    mode: 'c',
    styleActiveLine: true,
    lineNumbers: true,
    smartIndent: true,
    lineWrapping: true
  },
  showPages: 'List'
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_SHOW_LIST:
      return {...state,'showList':action.showList};
    case constants.COMPETITION_RECEIVE_ALL_LIST:
      return {...state,'competitionAllList':action.competitionAllList};
    case constants.COMPETITION_RECEIVE_LIST:
      return {...state,'competitionList':action.competitionList};
    case constants.COMPETITION_RECEIVE_ALL_RANK_LIST:
      return {...state,'competitionAllRankList':action.competitionAllRankList};
    case constants.COMPETITION_EACH_RANK_LIST:
      return {...state,'competitionEachRankListId':action.competitionEachRankListId}
    case constants.COMPETITION_RECEIVE_TOPIC_LIST:
      return {...state,'competitionTopicList':action.competitionTopicList}
    case constants.COMPETITION_NEXT_TOPIC:
      return {...state,'topicId':action.topicId}
    case constants.COMPETITION_CHANGE_OPTIONS:
      return {...state,'codeMirrorOptions':action.codeMirrorOptions}
    case constants.COMPETITION_CHANGE_SHOW_PAGES:
      return {...state,'showPages':action.showPages, 'competitionId':action.competitionId}
    default:
      return state;
  }
}
