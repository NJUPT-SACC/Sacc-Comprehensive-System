import { combineReducers } from 'redux';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as assignmentReducer} from '../pages/assignment/store';
import { reducer as managementReducer} from '../pages/management/store';
import { reducer as competitionReducer} from '../pages/competition/store';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import immutableTransform from 'redux-persist-transform-immutable'
const homepersistConfig = {
  key: 'home',
  storage,
  whitelist: ['BasicInformationList','authKey','roles']
};
const competitionpersistConfig = {
    key: 'competition',
    storage,
    whitelist: ['competitionList',"competitionId","competitionEachRankList"]
}  
const managementpersistConfig = {
    key: 'management',
    storage,
    whitelist: ['show','showId','fromTableList','fromTableItem']
}
const assignmentpersistConfig = {
    key: 'assignment',
    storage,
    whitelist: ['currentTitle','currentColor','english','currentQuestion','questionList','totalPage','currentPage','codingParam']
}
const reducer = combineReducers({
    home: persistReducer(homepersistConfig, homeReducer),
    competition: persistReducer(competitionpersistConfig, competitionReducer),
    management: persistReducer(managementpersistConfig, managementReducer),
    assignment: persistReducer(assignmentpersistConfig, assignmentReducer)
});

export default reducer;
