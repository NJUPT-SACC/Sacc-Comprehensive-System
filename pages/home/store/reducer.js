import * as constants from './constants';

const defaultState = {
  show: '首页',
  loginStatus: 5002,
  rightPercent: '0%',
  wrongPercent: '0%',
  gold: 0,
  silver: 0,
  copper: 0,
  BasicInformationList:[],
  portrait: 'http://sacc.oss-cn-beijing.aliyuncs.com/sacc-static/%E9%A6%96%E9%A1%B5-%E9%80%89%E4%B8%AD.png',
  skillList: [],
  registeredStatus: 5002
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.PERSON_CENTER_CHANGE_SHOW:
      return  {...state,'show':action.show}
    case constants.HOME_LOGIN:
      return  {...state,'loginStatus':action.loginStatus}
    case constants.HOME_PRACTICE_RATE:
      return {...state,'rightPercent':action.rightPercent, 'wrongPercent':action.wrongPercent}
    case constants.HOME_COMPETITION_MEDEL:
      return {...state,'gold':action.gold, 'silver':action.silver, 'copper':action.copper}
    case constants.HOME_BASIC_INFORMATION:
      return {...state,'BasicInformationList':action.BasicInformationList}
    case constants.HOME_CHANGE_BASICINFORMATION:
      return {...state,'BasicInformationList':action.onChangeBasicInformationList}
    case constants.HOME_SAVE_BASICINFORMATION:
      return {...state,'BasicInformationList':action.NewBasicInformationList}
    case constants.HOME_SKILL:
      return {...state, 'skillList':action.skillList}
    case constants.HOME_REGISTERED:
      return {...state, 'registeredStatus':action.registeredStatus}
    default:
      return state;
  }
}