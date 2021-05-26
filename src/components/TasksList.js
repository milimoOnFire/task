import {Button, Card, CardActionArea, CardActions, CardContent, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateTask} from '../redux/tasks/actions';
import {size} from '../utils/utils';
import Status from './Status';

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
}));
const TasksList = ({handleAction,doneTasks}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasksReducers);
    const filteredTasks = tasks.filter((task)=>{
        if((doneTasks && task.isDone) || (!doneTasks && !task.isDone)){
            return task
        }
    })
    const handleDone = (id) => {
        const task = tasks.find(task=>task.id === Number(id));
        dispatch(updateTask({...task,isDone:true},
            () => {},
        ));
    };
    return (
        size(filteredTasks) > 0 && filteredTasks.map((task) => (
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
                        <Status status={task.priority}/>
                    </CardContent>
                </CardActionArea>
                {!doneTasks && <CardActions className={classes.btns}>
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
                </CardActions>}
            </Card>
        )));
};


export default TasksList;
