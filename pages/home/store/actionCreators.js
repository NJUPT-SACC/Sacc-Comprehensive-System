import { constants } from './index'
import axios from 'axios';
import { message } from 'antd';
import 'antd/dist/antd.css';
export const changeShow = (showClassName) => ({
  type: constants.PERSON_CENTER_CHANGE_SHOW,
  show: showClassName
});

const Iflogin = (authKey,roles) => ({
  type: constants.HOME_LOGIN,
  authKey,
  roles
});

const practiceRate = (rightPercent,wrongPercent) => ({
  type: constants.HOME_PRACTICE_RATE,
  rightPercent,
  wrongPercent
})
const competitionMedel = (gold,silver,copper) => ({
  type: constants.HOME_COMPETITION_MEDEL,
  gold,
  silver,
  copper
})

const basicInformation = (BasicInformationList) => ({
  type: constants.HOME_BASIC_INFORMATION,
  BasicInformationList
})

export const changeBasicInformation = (onChangeBasicInformationList) => ({
  type: constants.HOME_CHANGE_BASICINFORMATION,
  onChangeBasicInformationList
})

const saveNewBasicInformation = (NewBasicInformationList) => ({
  type: constants.HOME_SAVE_BASICINFORMATION,
  NewBasicInformationList
})

export const Login = (username,password,ref) => {
  return (dispatch) =>{
    axios.post("http://192.168.1.10:8080/admin/login",{
      username,
      password
    })
    .then(res => {
      console.log(res.data)
      if(res.data.message == "登陆成功"){
        document.cookie = `authkey=${res.data.data.authKey}`;
        setTimeout(function(){
          dispatch(Iflogin(res.data.data.authKey,res.data.data.user.roles[0]));
        },1100)
        message.success('已经成功登陆啦~');
        ref.current.classList.add("LoginNarrow");
      }else{
        message.error('再好好检查一下用户名和密码噢~')
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

export const PracticeRate = (authKey) => {
  return(dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/personCenter/practiceRate",{
      authKey
    })
    .then(res => {
      dispatch(practiceRate(res.data.data.rightPercent,res.data.data.wrongPercent))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const CompetitionMedel = (authKey) => {
  return(dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/personCenter/competitionMedal",{
      authKey
    })
    .then(res => {
      dispatch(competitionMedel(res.data.data.gold,res.data.data.silver,res.data.data.copper))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const BasicInformation = (authKey) => {
  return (dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation",{
      authKey
    })
    .then(res => {
      dispatch(basicInformation(res.data.data.list))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const SaveNewBasicInformation = (List,authKey) => {
  return (dispatch) =>{
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation",{
      List,
      authKey
    })
    .then(res => {
      dispatch(saveNewBasicInformation(res.data.data.list))
    }).catch(err => {
      console.log(err)
    })
  }
}

const skill = (skillList) => ({
  type:constants.HOME_SKILL,
  skillList
})

export const Skill = () => {
  return (dispatch) =>{
    axios.get("https://www.easy-mock.com/mock/5d3d184d62e39b55d16e97b6/home/personCenter/radar")
    .then(res => {
      dispatch(skill(res.data.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const Registered = (username,password,email) => {
  return (dispatch) => {
    axios.post("http://192.168.1.10:8080/admin/signup",{
      username,
      password,
      email
    })
    .then(res => {
      console.log(res.data)
      res.data.message == '注册成功'? message.success('注册成功啦~'):message.error(`${res.data.message}`);
    }).catch(err => {
      console.log(err)
    })
  }
}