import {combineReducers} from 'redux';
import tasksReducers from './tasks/reducers';

// Defining Global combined reducer
const reducers = combineReducers({
    tasksReducers
})

export default reducers;
