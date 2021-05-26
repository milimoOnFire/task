import './App.css';
import {useSelector} from 'react-redux';
import CreateTaskContainer from './containers/CreateTaskContainer';
import TasksListContainer from './containers/TasksListContainer';
import {size} from './utils/utils';
//
// a task object
// {Id,title,description,priority,gifts,isDone}

const App = () => {
    const {tasks} = useSelector(state => state.tasksReducers);
    return size(tasks)>0 ? <TasksListContainer /> : <CreateTaskContainer />
};

export default App;
