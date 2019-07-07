import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer} from '../pages/home/store';
import { reducer as assignmentReducer} from '../pages/assignment/store';
import { reducer as managementReducer} from '../pages/management/store';
import { reducer as competitionReducer} from '../pages/competition/store';

const reducer = combineReducers({
    home: homeReducer,
    assignment: assignmentReducer,
    management: managementReducer,
    competition: competitionReducer
});

export default reducer;
