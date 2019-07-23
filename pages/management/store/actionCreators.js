import { constants } from './index'
import axios from 'axios';

export const changeShow = (showName,showId = 0) => ({
  type: constants.MANAGEMENT_CHANGE_SHOW,
  show: showName,
  id:showId
});

const showList = (fromTableList) => ({
  type:constants.MANAGEMENT_SHOW_LIST,
  fromTableList:fromTableList
})

const showItem = (fromTableItem) => ({
  type:constants.MANAGEMENT_SHOW_ITEM,
  fromTableItem:fromTableItem
})

export const receiveList = () => {
  return (dispatch) =>{
    axios('https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/testlist')
    .then(res => {
      dispatch(showList(res.data.data))
    })
    .catch(err => {
      console.log(err)
    })
  }
} 

export const receiveItem = () => {
    return (dispatch) => {
        axios('https://www.easy-mock.com/mock/5d2c1c823a04ad635d14cffc/testitem')
        .then(res => {
            console.log(res.data.data)
            dispatch(showItem(res.data.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}