import * as constants from './constants';

const defaultState = {
  currentTitle: '',
  currentColor: "#ffffff",
  english: "",
  currentQuestion: {},
  questionList: [],
  totalPage: 1,
  currentPage: 1
};

const setCurrentTitle = (state, { current, color, english }) => {
  return {
    ...state,
    currentTitle: current,
    currentColor: color,
    english: english
  }
};

const getQuestionList = (state, { questionList }) => {
  return {
    ...state,
    "questionList": questionList
  }
};

const getQuestions = (state, { data }) => {
  return {
    ...state,
    currentQuestion: data
  }
};

const setTotalPageReducer = (state, { totalPage }) => {
  return {
    ...state,
    "totalPage": totalPage
  }
};

const changeCurrentPageReducer = (state, { currentPage }) => {
  return {
    ...state,
    "currentPage": currentPage
  }
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
    default:
      return state;
  }
}