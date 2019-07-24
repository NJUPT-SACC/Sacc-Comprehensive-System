import { constants } from './index'
import axios from 'axios';

const getQuestions = (data) => ({
  type: constants.GET_QUESTION_DISC,
  data
});


export const onSetCurrentTitle = (current, color, english) => ({
  type: constants.SET_CURRENT_TITLE,
  current,
  color,
  english
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