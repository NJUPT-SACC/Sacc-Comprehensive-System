import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentTitle: '',
  currentColor: "#ffffff",
  english: ""
});

const setCurrentTitle = (state, action) => {
  return state.merge({
    currentTitle: action.current,
    currentColor: action.color,
    english: action.english
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