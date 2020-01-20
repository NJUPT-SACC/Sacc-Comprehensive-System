import * as constants from './constants';

const defaultState = {
  competitionList:'',
  competitionAllRankList:'',
  competitionAllList: '',
  show: '所有比赛',
  competitionEachRankListId: 0
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_SHOW:
      return {...state,'show':action.show};
    case constants.COMPETITION_RECEIVE_ALL_LIST:
      return {...state,'competitionAllList':action.competitionAllList};
    case constants.COMPETITION_RECEIVE_LIST:
      return {...state,'competitionList':action.competitionList};
    case constants.COMPETITION_RECEIVE_ALL_RANK_LIST:
      return {...state,'competitionAllRankList':action.competitionAllRankList};
      case constants.COMPETITION_EACH_RANK_LIST:
        return {...state,'competitionEachRankListId':action.competitionEachRankListId}
    default:
      return state;
  }
}
