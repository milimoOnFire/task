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
// Init Styles
const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
// Main Task List Container
const TasksListContainer = () => {
    // Get classes
    const classes = useStyles();
    // Selected Task Id
    const [taskId, setTaskId] = useState(null);
    // Modals Visibility States
    const [open, setOpen] = useState(
        {
            'DoneTasks': false,
            'CreateTask': false,
            'EditTask': false,
            'TaskDetails': false,
        },
    );
    // Modal Visibility Actions
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
    // Handle Modals Open Action
    const handleOpen = (modalName) => {
        const clonedOpen = {...open};
        clonedOpen[modalName] = true;
        setOpen(clonedOpen);
    };
    // Handle Modals Close Action
    const handleClose = (modalName) => {
        const clonedOpen = {...open};
        clonedOpen[modalName] = false;
        setOpen(clonedOpen);
    };
    // Handle Actions from child Components
    const handleAction = (action, id) => {
        actions[action](id);
    };
    // Switch between detail Modal to Edit Modal
    const handleSwitch = () => {
        setOpen({
            'DoneTasks': false,
            'CreateTask': false,
            'EditTask': true,
            'TaskDetails': false,
        });
    };
    // JSX Parts
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
                openEdit={handleSwitch}
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
