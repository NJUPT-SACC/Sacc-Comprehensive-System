import * as constants from './constants';

const defaultState = {
  show: '首页',
  rightPercent: '0%',
  wrongPercent: '0%',
  gold: 0,
  silver: 0,
  copper: 0,
  BasicInformationList:[
    {
      "key": "昵称",
      "value": ""
    }, {
      "key": "姓名",
      "value": ""
    }, {
      "key": "邮箱",
      "value": ""
    }, {
      "key": "年级",
      "value": ""
    }, {
      "key": "性别",
      "value": ""
    }, {
      "key": "签名",
      "value": ""
    },
    {
      "key": "学号",
      "value": ""
    }, {
      "key": "组别",
      "value": ""
    }, {
      "key": "学院",
      "value": ""
    }, {
      "key": "专业",
      "value": ""
    }
      ],
  skillList: [],
  authkey:'123',
  roles:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.PERSON_CENTER_CHANGE_SHOW:
      return  {...state,'show':action.show}
    case constants.HOME_LOGIN:
      return  {...state,'authKey': action.authKey, 'roles': action.roles}
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
    default:
      return state;
  }
}