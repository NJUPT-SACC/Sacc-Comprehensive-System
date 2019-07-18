import { constants } from './index'
import axios from 'axios';

export const onSetCurrentTitle = (current, color, iconURL) => ({
  type: constants.SET_CURRENT_TITLE,
  current,
  color,
  iconURL
});