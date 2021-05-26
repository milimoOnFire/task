import {Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React, {useState} from 'react';
import CreateTaskModal from '../components/CreateTaskModal';
import DoneTasksModal from '../components/DoneTasksModal';
import EditTaskModal from '../components/EditTaskModal';
import TaskDetailsModal from '../components/TaskDetailsModal';
import TasksList from '../components/TasksList';
import Layout from '../layouts/layout';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));


const TasksListContainer = () => {
    const classes = useStyles();
    const [taskId, setTaskId] = useState(null);

    const [open, setOpen] = useState(
        {
            'DoneTasks': false,
            'CreateTask': false,
            'EditTask': false,
            'TaskDetails': false,
        },
    );

    const actions = {
        'SHOW': (id) => {
            setTaskId(id);
            handleOpen('TaskDetails');
        },
        'EDIT': (id) => {
            setTaskId(id);
            handleOpen('EditTask');
        },
    };

    const handleOpen = (modalName) => {
        const clonedOpen = {...open};
        clonedOpen[modalName] = true;
        setOpen(clonedOpen);
    };

    const handleClose = (modalName) => {
        const clonedOpen = {...open};
        clonedOpen[modalName] = false;
        setOpen(clonedOpen);
    };

    const handleAction = (action, id) => {
        console.log(actions[action])
        console.log(action)
        actions[action](id);
    };

    return (
        <Layout
            onBtnClick={() => handleOpen('DoneTasks')}
        >
            <TasksList handleAction={handleAction} />
            <DoneTasksModal
                open={open['DoneTasks']}
                handleClose={() => handleClose('DoneTasks')}
            />
            <CreateTaskModal
                open={open['CreateTask']}
                handleClose={() => handleClose('CreateTask')}
            />
            <EditTaskModal
                taskId={taskId}
                open={open['EditTask']}
                handleClose={() => handleClose('EditTask')}
            />
            <TaskDetailsModal
                taskId={taskId}
                open={open['TaskDetails']}
                handleClose={() => handleClose('TaskDetails')}
            />
            <Fab
                color="primary"
                aria-label="add"
                className={classes.fab}
                onClick={() => handleOpen('CreateTask')}
            >
                <AddIcon />
            </Fab>
        </Layout>
    );
};

export default TasksListContainer;
