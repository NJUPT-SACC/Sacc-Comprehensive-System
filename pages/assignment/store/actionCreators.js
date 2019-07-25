import { constants } from './index'
import axios from 'axios';

const getQuestions = (data) => ({
  type: constants.GET_QUESTION_DISC,
  data
});

const onGetQuestionList = (data) => ({
  type: constants.GET_QUESTION_LIST,
  questionList: data
});


export const onSetCurrentTitle = (current, color, english) => ({
  type: constants.SET_CURRENT_TITLE,
  current,
  color,
  english
});

export const setTotalPage = (totalPage) => ({
  type: constants.SET_TOTAL_PAGE,
  totalPage
});

export const changeCurrentPage = (currentPage) => ({
  type: constants.CHANGE_CURRENT_PAGE,
  currentPage
});

export const onGetQuestionDisc = (langArr) => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5d2c1c823a04ad635d14cffc/getQuestion', langArr)
      .then(res => {
        const { data } = res.data;
        dispatch(getQuestions(data));
      })
  }
};

export const getQuestionList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5d2c1c823a04ad635d14cffc/questionList')
      .then(res => {
        const { data } = res.data;
        dispatch(onGetQuestionList(data));
      })
  }
};
