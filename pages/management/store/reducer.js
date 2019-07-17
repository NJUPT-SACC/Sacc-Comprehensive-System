import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show:'导入题目',
  fromTableList:[],
  fromTableItem:{}
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.MANAGEMENT_CHANGE_SHOW:
      return state.set('show',action.show);
    case constants.MANAGEMENT_SHOW_LIST:
      return state.set('fromTableList',action.fromTableList);
    case constants.MANAGEMENT_SHOW_ITEM:
      return state.set('fromTableItem',action.fromTableItem);
    default:
      return state;
  }
}