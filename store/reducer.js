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
    whitelist: ['*'] // place to select which state you want to persist
};
const competitionpersistConfig = {
    key: 'competition',
    storage,
    whitelist: ['competitionName'] // place to select which state you want to persist
};
const assignmentpersistConfig = {
    key: 'assignment',
    storage,
    whitelist: ['currentTitle','currentColor','english','currentQuestion','questionList','totalPage','currentPage','codingParam'] // place to select which state you want to persist
};
const reducer = combineReducers({
    home: persistReducer(homepersistConfig, homeReducer),
    competition: persistReducer(competitionpersistConfig, competitionReducer),
    assignment: persistReducer(assignmentpersistConfig, assignmentReducer)
});

export default reducer;
