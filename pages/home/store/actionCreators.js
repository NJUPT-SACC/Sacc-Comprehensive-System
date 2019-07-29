import { constants } from './index'
import axios from 'axios';

export const changeShow = (showClassName) => ({
  type: constants.PERSON_CENTER_CHANGE_SHOW,
  show: showClassName
});

const Iflogin = (loginStatus) => {
  type: constants.HOME_LOGIN
  loginStatus
}

const Login = (username,password) =>{
  return (dispath) =>{
    axios.post("http://192.168.1.50:8080/admin/login",{
      username,
      password
    })
    .then(res => {
      const LoginStatus = res.data.status;
      dispath(Iflogin(LoginStatus));
    })
    .catch(err => {
      console.log(err)
    })
  }
}
