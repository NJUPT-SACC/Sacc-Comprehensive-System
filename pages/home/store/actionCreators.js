import { constants } from './index'
import axios from 'axios';

export const changeShow = (showClassName) => ({
  type: constants.HOME_CHANGE_SHOW,
  show: showClassName
});