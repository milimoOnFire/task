import {Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import TasksList from './TasksList';

const useStyles = makeStyles((theme) => {
    console.log(theme)
    return({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: theme.spacing(1,0),
        justifyContent:'space-around'
    },
})});
const DoneTasksModal = ({open, handleClose}) => {
    const classes = useStyles();
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Card className={classes.paper}>
                    <TasksList handleAction={()=>{}} />
                </Card>
            </Fade>
        </Modal>
    );
};

export default DoneTasksModal;
