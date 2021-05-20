import {ADD_TASK,UPDATE_TASK} from '../../constants/actionTypes';

// initiates first state of store
let initialState = {
    tasks: [],
};
// init store From localStorage
if (typeof window !== 'undefined') {
    // Get data from local Storage
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // Make sure tasks are available in Local Storage
    if (tasks) {
        initialState = {
            tasks: tasks,
        };
    }
}
// tasks reducer
const taskReducers = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case ADD_TASK:
            // Update Local storage
            if (typeof window !== 'undefined') {
                localStorage.setItem('tasks', JSON.stringify([...state.tasks, payload.task]));
            }
            return {
                ...state,
                tasks: [...state.tasks, payload.task],
            };
        case UPDATE_TASK:
            // Update Local storage
            if (typeof window !== 'undefined') {
                localStorage.setItem('tasks', JSON.stringify(payload.updatedTasks));
            }
            return {
                ...state,
                tasks: payload.updatedTasks,
            };
        default:
            return {...state};
    }
};
export default taskReducers;
