import {Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {useFormik} from 'formik';
import React from 'react';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
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
const validationSchema = yup.object({
    title: yup
    .string('Enter Task Title')
    .required(' Task Title is required'),
    description: yup
    .string('Enter Task Description')
    .min(8, 'Task Description should be of minimum 8 characters length')
    .required('Task Description is required'),
    gifts: yup
    .string('Enter Task Gifts')
    .required('Task Gifts is required'),
});
const CreateTaskModal = ({open, handleClose}) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            gifts: '',
            priority: 'l',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

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
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={formik.handleSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="title"
                            label="Task Title"
                            type="text"
                            id="taskTitle"
                            autoComplete="current-password"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}

                        />
                        <TextField
                            id="outlined-multiline-static"
                            margin="normal"
                            label="description"
                            name="description"
                            required
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            error={formik.touched.description && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
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
                            value={formik.values.gifts}
                            onChange={formik.handleChange}
                            error={formik.touched.gifts && Boolean(formik.errors.gifts)}
                            helperText={formik.touched.gifts && formik.errors.gifts}
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
                                name="priority"
                                defaultValue="l"
                                value={formik.values.priority}
                                onChange={formik.handleChange}
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
    );
};

export default CreateTaskModal;
