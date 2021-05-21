import {
    Button,
    Card,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    BtnContainer: {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '80vh',
    },
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
}));

const CreateTask = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.BtnContainer}>
            <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                Create Your First Task ;)
            </Button>
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
                        <form
                            className={classes.form}
                            noValidate
                        >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="taskTitle"
                                label="Task Title"
                                type="text"
                                id="taskTitle"
                                autoComplete="current-password"
                            />
                            <TextField
                                id="outlined-multiline-static"
                                margin="normal"
                                label="Task Description"
                                required
                                fullWidth
                                multiline
                                rows={4}
                                variant="outlined"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="gifts"
                                label="Gifts and KPI for this task ;)"
                                type="text"
                                id="gifts"
                                autoComplete="current-password"
                            />
                            <FormControl
                                component="fieldset"
                                margin="normal"
                            >
                                <FormLabel component="legend">
                                    Task Priority
                                </FormLabel>
                                <RadioGroup
                                    row
                                    aria-label="taskPriority"
                                    name="taskPriority"
                                    defaultValue="low"
                                >
                                    <FormControlLabel
                                        value="l"
                                        control={<Radio color="primary" />}
                                        label="Low"
                                    />
                                    <FormControlLabel
                                        value="m"
                                        control={<Radio color="primary" />}
                                        label="Medium"

                                    />
                                    <FormControlLabel
                                        value="h"
                                        control={<Radio color="primary" />}
                                        label="High"

                                    />
                                </RadioGroup>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Add To Tasks
                            </Button>
                        </form>
                    </Card>
                </Fade>
            </Modal>
        </div>
    );
};
export default CreateTask;
