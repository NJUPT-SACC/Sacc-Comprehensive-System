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

/* 根据题目总数设定总的页数，默认是每一页 10 道踢 */
export const setTotalPage = (totalPage) => ({
  type: constants.SET_TOTAL_PAGE,
  totalPage
});

/* 分页器改变当前页 */
export const changeCurrentPage = (currentPage) => ({
  type: constants.CHANGE_CURRENT_PAGE,
  currentPage
});

/* 控制题目详情页面的题目列表的显示和隐藏 */
export const onChangeListDisplay = (isShow) => ({
  type: constants.CHANGE_LIST_DISPLAY,
  showQuestionList: isShow
});

/* 根据题目 id 获取当前题目 */
export const onGetQuestionDisc = (questionId) => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5d2c1c823a04ad635d14cffc/questionDetail', questionId)
      .then(res => {
        const { data } = res.data;
        dispatch(getQuestions(data));
      })
  }
};

/* 获取题目列表 (题目列表里面的题目只有题目描述和题目id，难度等，没有题目的详细信息) */
export const getQuestionList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5d2c1c823a04ad635d14cffc/questionList')
      .then(res => {
        const { data } = res.data;
        dispatch(onGetQuestionList(data));
      })
  }
};
