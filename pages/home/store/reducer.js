import * as constants from './constants';

const defaultState = {
  show: '首页',
  loginStatus: 2000,
  rightPercent: '0%',
  wrongPercent: '0%',
  gold: 0,
  silver: 0,
  copper: 0,
  BasicInformationList:[
        {
          "key": "昵称",
          "value": "游客"
        },
        {
          "key": "姓名",
          "value": ""
        },
        {
          "key": "学号",
          "value": ""
        },
        {
          "key": "组别",
          "value": "前端组"
        },
        {
          "key": "邮箱",
          "value": ""
        },
        {
          "key": "学院",
          "value": ""
        },
        {
          "key": "专业",
          "value": ""
        },
        {
          "key": "年级",
          "value": ""
        },
        {
          "key": "性别",
          "value": ""
        },{
          "key": "签名",
          "value": "的发射点发射点"
        }
  ],
  skillList: [],
  registeredStatus: 5002,
  registeredMsg:"注册",
  loginMsg:"登录"
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.PERSON_CENTER_CHANGE_SHOW:
      return  {...state,'show':action.show}
    case constants.HOME_LOGIN:
      return  {...state,'loginStatus':action.loginStatus, 'loginMsg': action.loginMsg}
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
      return {...state, 'registeredStatus':action.registeredStatus, 'registeredMsg': action.registeredMsg}
    default:
      return state;
  }
}