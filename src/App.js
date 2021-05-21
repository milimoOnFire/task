import './App.css';
import CreateTaskContainer from './containers/CreateTaskContainer';

import TasksListContainer from './containers/TasksListContainer';


const App = () => {
    const thereIstasks = false;
    return thereIstasks ? <TasksListContainer /> : <CreateTaskContainer />
};

export default App;
