import * as constants from './constants';

const defaultState = {
  currentTitle: '',
  currentColor: "#ffffff",
  english: "",
  currentQuestion: {},
  questionList: [],
  totalPage: 1,
  currentPage: 1,
  showQuestionList: false,
  currentQuestionType: ''
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
    "currentQuestion": data
  }
};
/* 根据题目总数设定页数的数目 */
const setTotalPageReducer = (state, { totalPage }) => {
  return {
    ...state,
    "totalPage": totalPage
  }
};
/* 设定当前页面（题目列表页面，每一页默认有10道题） */
const changeCurrentPageReducer = (state, { currentPage }) => {
  return {
    ...state,
    "currentPage": currentPage
  }
};
/* 控制题目详情页面左侧题目列表的显示和隐藏 */
const changeListDisplayReducer = (state, { showQuestionList }) => {
  return {
    ...state,
    showQuestionList
  }
};
/* 设定当前题目类型是选择还是编程 */
const setQuestionTypeReducer = (state, { currentQuestionType }) => {
  return {
    ...state,
    currentQuestionType
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
    case constants.CHANGE_LIST_DISPLAY:
      return changeListDisplayReducer(state, action);
    case constants.SET_QUESTION_TYPE:
      return setQuestionTypeReducer(state, action);
    default:
      return state;
  }
}