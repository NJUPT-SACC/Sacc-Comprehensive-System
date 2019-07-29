import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  currentTitle: '',
  currentColor: "#ffffff",
  english: "",
  currentQuestion: {},
  questionList: [],
  totalPage: 1,
  currentPage: 1,
  codingParam: ''
});

const setCurrentTitle = (state, { current, color, english }) => {
  return state.merge({
    currentTitle: current,
    currentColor: color,
    english: english
  })
};

const getQuestionList = (state, { questionList }) => {
  return state.set("questionList", questionList)
};

const getQuestions = (state, { data }) => {
  return state.set("currentQuestion", data)
};

const setTotalPageReducer = (state, { totalPage }) => {
  return state.set("totalPage", totalPage)
};

const changeCurrentPageReducer = (state, { currentPage }) => {
  return state.set("currentPage", currentPage)
};

const setCodingListParam = (state, { param })  => {
  return state.set("codingParam", param)
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SET_CURRENT_TITLE:
      return setCurrentTitle(state, action);
    case constants.GET_QUESTION_DISC:
      return getQuestions(state, action);
    case constants.GET_QUESTION_LIST:
      return getQuestionList(state, action);
    case constants.SET_TOTAL_PAGE:
      return setTotalPageReducer(state, action);
    case constants.CHANGE_CURRENT_PAGE:
      return changeCurrentPageReducer(state, action);
    case constants.SET_CODING_LIST_PARAM:
      return setCodingListParam(state, action);
    default:
      return state;
  }
}