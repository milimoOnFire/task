import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import {useDispatch} from 'react-redux';

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
        width:'100%',
        position:'relative'
    },
    status: {
        position:'absolute',
        top:theme.spacing(2.2),
        right:theme.spacing(2),
        backgroundColor: theme.palette.warning.main,
        width:'1.8rem',
        height:'1.8rem',
        borderRadius:'50%'
    }
}));
const TasksList = ({handleAction}) => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const handleDone = (id) => {

    }
    return (
        <Card className={classes.card}>
            <CardActionArea onClick={() => handleAction('SHOW',12)}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        Lizard
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
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
                    onClick={() => handleAction('EDIT',1)}
                >
                    Edit Task
                </Button>
                <Button
                    variant="default"
                    color="primary"
                    size="small"
                    className={classes.btnSuccess}
                    onClick={() => handleDone(1)}
                >
                    Done Task
                </Button>
            </CardActions>

        </Card>
    );
};

export default TasksList;
