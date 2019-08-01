import { constants } from './index'
import axios from 'axios';

export const competition_change_name = (name) => ({
  type:constants.COMPETITION_CHANGE_NAME,
  name
})