import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentTitle: '',
  currentColor: "#ffffff",
  english: "",
  questions: []
});

const setCurrentTitle = (state, action) => {
  return state.merge({
    currentTitle: action.current,
    currentColor: action.color,
    english: action.english
  })
};

const getQuestions = (state, action) => {
  return state.set("questions", action.data)
};


export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SET_CURRENT_TITLE:
      return setCurrentTitle(state, action);
    case constants.GET_QUESTION_DISC:
      return getQuestions(state, action);
    default:
      return state;
  }
}