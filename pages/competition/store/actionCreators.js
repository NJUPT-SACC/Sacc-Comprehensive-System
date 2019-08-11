import { constants } from './index'
import axios from 'axios';

export const competition_change_name = (name) => ({
  type:constants.COMPETITION_CHANGE_NAME,
  name
})

const competition_init_list = (competitionList) => ({
  type: constants.COMPETITION_INIT_LIST,
  competitionList
})

export const init_list = () =>{
  return (dispatch) => {
    axios.get('http://139.155.83.63:3000/mock/13/competition/list')
    .then(res =>{
      console.log(res.data.data);
      dispatch(competition_init_list(res.data.data))
    })
    .catch(err => {
      console.log(err);
    })
  }
}