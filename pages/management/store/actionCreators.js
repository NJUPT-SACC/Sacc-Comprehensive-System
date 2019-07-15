import { constants } from './index'
import axios from 'axios';

export const changeShow = (showName) => ({
    type: constants.MANAGEMENT_CHANGE_SHOW,
    show: showName
});

