import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = {
  competitionName:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_NAME:
      return {...state,'competitionName':action.name}
    default:
      return state;
  }
}