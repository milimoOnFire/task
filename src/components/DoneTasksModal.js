import {
    Card, CardContent, Typography,
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
import TasksList from './TasksList';
// Init Styles
const useStyles = makeStyles((theme) => {
    return ({
        modal: {
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow:'scroll',
            height:'100%',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: '440px',
        },
        buttonsContainer: {
            display: 'flex',
            flexDirection: 'row',
            padding: theme.spacing(1, 0),
            justifyContent: 'space-around',
        },
        content: {
            textAlign: 'center',
        },
    });
});
// jsx
const DoneTasksModal = ({open, handleClose}) => {
    // Get classes
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
                    <CardContent className={classes.content}>
                        <Typography
                            component="h6"
                            variant="h6"
                        >
                            Done Tasks
                        </Typography>
                    </CardContent>
                    <TasksList
                        handleAction={handleClose}
                        doneTasks={true}
                    />
                </Card>
            </Fade>
        </Modal>
    );
};

export default DoneTasksModal;
