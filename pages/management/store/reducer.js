import * as constants from './constants';
import { fromJS } from "immutable";

const defaultState = fromJS({
  show:'操作日志',
  showId:0,
  fromTableList:[{
    "id": "无",
    "Name": "无",
    "type": "无",
    "Content": "无",
    "Score": '无',
    "Grade":'无'
  }],
  fromTableItem:{
    "id": "0",
    "Name": "无",
    "type": "无",
    "Content": "无",
    "Selects": [
      "无",
      "无",
      "无",
      "无"
    ],
    "isCheckbos": false,
    "answers": [
      false,
      false,
      false,
      false
    ],
    "Score": "无",
    "Grade": 0
  }
});

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.MANAGEMENT_CHANGE_SHOW:
      return state.merge({show:action.show,showId:action.id});
    case constants.MANAGEMENT_SHOW_LIST:
      return state.set('fromTableList',action.fromTableList);
    case constants.MANAGEMENT_SHOW_ITEM:
      return state.set('fromTableItem',action.fromTableItem);
    default:
      return state;
  }
}