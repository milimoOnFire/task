import {Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import CreateTaskModal from '../components/CreateTaskModal';
import TasksList from '../components/TasksList';
import Layout from '../layouts/layout';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));
const TasksListContainer = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Layout>
            <CreateTaskModal
                open={open}
                handleClose={handleClose}
            />
            <TasksList/>
            <Fab
                color="primary"
                aria-label="add"
                className={classes.fab}
                onClick={handleOpen}
            >
                <AddIcon />
            </Fab>
        </Layout>
    );
};

export default TasksListContainer;
