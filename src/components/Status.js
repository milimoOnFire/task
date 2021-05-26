import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
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
const Status = ({status}) => {
    const classes = useStyles();
    const state = {
        'l':'green',
        'm':'yellow',
        'h':'red'
    }
    return (
        <div className={classes.status} style={{backgroundColor:state[status]}}/>
    );
};

export default Status;
