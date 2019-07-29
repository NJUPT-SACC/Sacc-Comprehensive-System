import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show: '首页',
  loginStatus: 5002
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.PERSON_CENTER_CHANGE_SHOW:
      return state.set('show',action.show);
    case constants.HOME_LOGIN:
      return state.set('loginStatus',action.loginStatus)
    default:
      return state;
  }
}