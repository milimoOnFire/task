import {Fab} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },

}));
const TasksListContainer = (props) => {
    const classes = useStyles();
    return (
        <>
            <Fab
                color="primary"
                aria-label="add"
                className={classes.fab}
            >
                <AddIcon />
            </Fab>
        </>
    );
};

export default TasksListContainer;
