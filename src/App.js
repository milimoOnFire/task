import './App.css';
import CreateTaskContainer from './containers/CreateTaskContainer';

import TasksListContainer from './containers/TasksListContainer';


const App = () => {
    const thereIstasks = true;
    return thereIstasks ? <TasksListContainer /> : <CreateTaskContainer />
};

export default App;
