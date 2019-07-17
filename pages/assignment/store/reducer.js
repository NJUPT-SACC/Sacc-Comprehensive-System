import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentTitle: '',
  currentColor: "#ffffff"
});

const setCurrentTitle = (state, action) => {
  return state.merge({
    currentTitle: action.current,
    currentColor: action.color
  })
};


export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SET_CURRENT_TITLE:
      return setCurrentTitle(state, action);
    default:
      return state;
  }
}