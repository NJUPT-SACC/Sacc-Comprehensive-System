import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentTitle: '',
  currentColor: "#ffffff",
  english: "",
  questions: [],
  questionList: []
});

const setCurrentTitle = (state, action) => {
  return state.merge({
    currentTitle: action.current,
    currentColor: action.color,
    english: action.english
  })
};

const getQuestionList = (state, action) => {
  return state.set("questionList", action.questionList)
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
    case constants.GET_QUESTION_LIST:
        return getQuestionList(state, action);
    default:
      return state;
  }
}