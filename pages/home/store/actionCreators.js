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

export const changeBasicInformation = (onChangeBasicInformationList) => ({
  type: constants.HOME_CHANGE_BASICINFORMATION,
  onChangeBasicInformationList
})

const saveNewBasicInformation = (NewBasicInformationList) => ({
  type: constants.HOME_SAVE_BASICINFORMATION,
  NewBasicInformationList
})

export const Login = (username,password) => {
  return (dispatch) =>{
    axios.post("http://192.168.1.52:8080/admin/login",{
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
    axios.get("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/personCenter/competitionMedal")
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
      dispatch(basicInformation(res.data.data.list))
    }).catch(err => {
      console.log(err)
    })
  }
}

export const SaveNewBasicInformation = (List) => {
  return (dispatch) =>{
    axios.post("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation",{
      List
    })
    .then(res => {
      dispatch(saveNewBasicInformation(res.data.data.list))
    }).catch(err => {
      console.log(err)
    })
  }
}

// const changePortrait = (portrait) => ({
//   type:constants.HOME_CHANGE_PORTRAIT,
//   portrait
// })

// export const ChangePortrait = (portrait) => {
//   return (dispatch) =>{
//     axios.post("https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/PersonCenter/BasicInformation",{
//       portrait
//     })
//     .then(res => {
//       console.log("portrait",portrait)
//       console.log("res",res.data.data.portrait)
//       dispatch(changePortrait(res.data.data.portrait))
//     }).catch(err => {
//       console.log(err)
//     })
//   }
// }

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