import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    btns: {
        justifyContent: 'end',
    },
    btnSuccess: {
        backgroundColor: 'green',
        color: 'white',
        '&:hover': {
            backgroundColor: 'green',
            boxShadow: '0 0 2px #775a40',
        },
    },
    btnWarning: {
        backgroundColor: 'orange',
        color: 'white',
        '&:hover': {
            backgroundColor: 'orange',
            boxShadow: '0 0 2px #775a40',
        },
    },
    card: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        width:'100%'
    },
    status: {
        position:'absolute',
        top:theme.spacing(2.2),
        right:theme.spacing(2),
        backgroundColor: 'orange',
        width:'1.8rem',
        height:'1.8rem',
        borderRadius:'50%'
    }
}));
const TasksList = () => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
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
                >
                    Edit Task
                </Button>
                <Button
                    variant="default"
                    color="primary"
                    size="small"
                    className={classes.btnSuccess}
                >
                    Done Task
                </Button>
            </CardActions>
        </Card>
    );
};

export default TasksList;
