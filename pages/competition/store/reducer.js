import * as constants from './constants';

const defaultState = {
  competitionList:'',
  competitionEachRankList:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_RECEIVE_LIST:
      return {...state,'competitionList':action.competitionList};
    case constants.COMPETITION_RECEIVE_EACH_RANK_LIST:
      return {...state,'competitionEachRankList':action.competitionEachRankList}
    default:
      return state;
  }
}
