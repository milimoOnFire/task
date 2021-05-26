import {Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {useFormik} from 'formik';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {deleteTask, updateTask} from '../redux/tasks/actions';

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
const EditTaskModal = ({taskId,open, handleClose}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {tasks} = useSelector(state => state.tasksReducers);
    const [task,setTask] = useState();


    const formik = useFormik({
        enableReinitialize:true,
        initialValues: {
            title: '',
            description: '',
            gifts: '',
            priority: '',
        },
        validationSchema:validationSchema,
        onSubmit: (values) => {
            dispatch(updateTask({...task,...values},
                () => {handleClose()},
            ));
        },
    })
    useEffect(()=>{
        if(!taskId) return
        const task = tasks.find(task=>task.id === Number(taskId));
        console.log('taskId',taskId)
        if(!task) return
        setTask(task);
        formik.setFieldValue('title',task.title)
        formik.setFieldValue('description',task.description)
        formik.setFieldValue('gifts',task.gifts)
        formik.setFieldValue('priority',task.priority)
    },[taskId])

    const doneTask = () =>{
        dispatch(updateTask({...task,isDone:true},
            () => {handleClose()},
        ));
    }
    const deleteThis = () => {
        dispatch(deleteTask(task.id,
            () => {handleClose()},
        ));
    }
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
                        onSubmit={formik.handleSubmit}
                        noValidate
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
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            error={formik.touched.title && Boolean(formik.errors.title)}
                            helperText={formik.touched.title && formik.errors.title}
                        />
                        <TextField
                            id="outlined-multiline-static"
                            margin="normal"
                            label="Task Description"
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
                        <div className={classes.buttonsContainer}>
                            <Button
                                type={'submit'}
                                variant="contained"
                                color="primary"
                                margin="normal"
                                className={classes.btn}
                            >
                                Edit Tasks
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={doneTask}
                            >
                                Done Tasks
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={deleteThis}
                            >
                                Delete Task
                            </Button>
                        </div>
                    </form>
                </Card>
            </Fade>
        </Modal>
    );
};

export default EditTaskModal;
