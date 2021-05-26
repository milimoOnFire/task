import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateTask} from '../redux/tasks/actions';
import {size} from '../utils/utils';

const useStyles = makeStyles((theme) => ({
    btns: {
        justifyContent: 'flex-end',
    },
    btnSuccess: {
        backgroundColor: theme.palette.success.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
            boxShadow: theme.shadows[5],
        },
    },
    btnWarning: {
        backgroundColor: theme.palette.warning.main,
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.warning.dark,
            boxShadow: theme.shadows[5],
        },
    },
    card: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(0),
        width: '100%',
        position: 'relative',
    },
    status: {
        position: 'absolute',
        top: theme.spacing(2.2),
        right: theme.spacing(2),
        backgroundColor: theme.palette.warning.main,
        width: '1.8rem',
        height: '1.8rem',
        borderRadius: '50%',
    },
}));
const TasksList = ({handleAction}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasksReducers);
    const handleDone = (id) => {
        const task = tasks.find(task=>task.id === Number(id));
        dispatch(updateTask({...task,isDone:true},
            () => {},
        ));
    };
    return (
        size(tasks) > 0 && tasks.map((task) => (
            <Card className={classes.card}>
                <CardActionArea onClick={() => handleAction('SHOW', task.id)}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                        >
                            {task.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {task.description}
                        </Typography>
                        <div className={classes.status}></div>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.btns}>
                    <Button
                        size="small"
                        variant="default"
                        color="default"
                        className={classes.btnWarning}
                        onClick={() => handleAction('EDIT', task.id)}
                    >
                        Edit Task
                    </Button>
                    <Button
                        variant="default"
                        color="primary"
                        size="small"
                        className={classes.btnSuccess}
                        onClick={() => handleDone(task.id)}
                    >
                        Done Task
                    </Button>
                </CardActions>

            </Card>
        )));
};


export default TasksList;
