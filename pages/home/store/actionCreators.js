import { constants } from './index'
import axios from 'axios';

export const changeShow = (showClassName) => ({
  type: constants.PERSON_CENTER_CHANGE_SHOW,
  show: showClassName
});

const Iflogin = (loginStatus) => ({
  type: constants.HOME_LOGIN,
  loginStatus
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

export const changeBasicInformation = (NewBasicInformationList) => ({
  type: constants.HOME_CHANGE_BASICINFORMATION,
  NewBasicInformationList
})

export const Login = (username,password) => {
  return (dispatch) =>{
    axios.post("http://192.168.1.50:8080/admin/login",{
      username,
      password
    })
    .then(res => {
      console.log(res.data)
      dispatch(Iflogin(res.data.status));
    }).catch(err => {
      console.log(err)
    })
  }
}

export const PracticeRate = () => {
  return(dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/personCenter/practiceRate")
    .then(res => {
      dispatch(practiceRate(res.data.data.rightPercent,res.data.data.wrongPercent))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const CompetitionMedel = () => {
  return(dispatch) => {
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/personCenter/competitionMedel")
    .then(res => {
      dispatch(competitionMedel(res.data.data.gold,res.data.data.silver,res.data.data.copper))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const BasicInformation = () => {
  return (dispatch) => {
    axios.post("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation")
    .then(res => {
      dispatch(basicInformation(res.data.data))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const SaveNewBasicInformation = (List) => {
  return (dispatch) =>{
    axios.post("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation",List)
    .then(res => {
      
    }).catch(err => {
      console.log(err)
    })
  }
}