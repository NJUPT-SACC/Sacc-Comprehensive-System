import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show: false
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.HOME_CHANGE_SHOW:
      return state.set('show',action.show);
    default:
      return state;
  }
}