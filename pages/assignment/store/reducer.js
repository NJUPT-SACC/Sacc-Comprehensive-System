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
  currentQuestionType: '',
  choiceQuestionAnswer: []
};
/* 临时存储题目答案，作为中间变量最后返回给 choiceQuestionAnswer */
let questionAnswers = [];

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
/* 获取题目详情（编程题和选择题） */
const getQuestionReducer = (state, { data }) => {
  return {
    ...state,
    currentQuestion: data
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

const setAnswerListReducer = (state, { currentQuestionAns }) => {
  if (state.choiceQuestionAnswer === []) {
    questionAnswers.push(currentQuestionAns);
  } else {
    questionAnswers.map((item, index) => {
      if (item.id === currentQuestionAns.id) {
        questionAnswers.splice(index)
      }
    });
    questionAnswers.push(currentQuestionAns);
  }
  console.log('questionAnswers: ', questionAnswers);
  return {
    ...state,
    choiceQuestionAnswer: questionAnswers
  }
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.SET_CURRENT_TITLE:
      return setCurrentTitle(state, action);
    case constants.GET_QUESTION_DISC:
      return getQuestionReducer(state, action);
    case constants.GET_QUESTION_LIST:
      return getQuestionList(state, action);
    case constants.SET_TOTAL_PAGE:
      return setTotalPageReducer(state, action);
    case constants.CHANGE_CURRENT_PAGE:
      return changeCurrentPageReducer(state, action);
    case constants.CHANGE_LIST_DISPLAY:
      return changeListDisplayReducer(state, action);
    case constants.SET_ANSWER_LIST:
      return setAnswerListReducer(state, action);
    default:
      return state;
  }
}