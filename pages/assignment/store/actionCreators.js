import { constants } from './index'
import axios from 'axios';

export const onSetCurrentTitle = (current, color, english) => ({
  type: constants.SET_CURRENT_TITLE,
  current,
  color,
  english
});