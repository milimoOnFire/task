import './App.css';
import {useSelector} from 'react-redux';
import CreateTaskContainer from './containers/CreateTaskContainer';
import TasksListContainer from './containers/TasksListContainer';
import {size} from './utils/utils';

const App = () => {
    // Select All Tasks From Redux and LocalStorage
    const {tasks} = useSelector(state => state.tasksReducers);
    // Route between Task List or Create Task Container
    return size(tasks) > 0 ? <TasksListContainer /> : <CreateTaskContainer />;
};
export default App;
