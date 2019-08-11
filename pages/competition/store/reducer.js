import * as constants from './constants';

const defaultState = {
  competitionId:'',
  competitionList:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_NAME:
      return {...state,'competitionId':action.name}
    case constants.COMPETITION_INIT_LIST:
      return {...state,'competitionList':action.competitionList}
    default:
      return state;
  }
}
