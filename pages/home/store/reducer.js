import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show: '首页',
  loginStatus: 5002,
  rightPercent: '0%',
  wrongPercent: '0%',
  gold: 0,
  silver: 0,
  copper: 0
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.PERSON_CENTER_CHANGE_SHOW:
      return state.set('show',action.show);
    case constants.HOME_LOGIN:
      return state.set('loginStatus',action.loginStatus);
    case constants.HOME_PRACTICE_RATE:
      return state.merge({'rightPercent':action.rightPercent,'wrongPercent':action.wrongPercent})
    case constants.HOME_COMPETITION_MEDEL:
      return state.merge({'gold':action.gold,'silver':action.silver,'copper':action.copper})
    default:
      return state;
  }
}