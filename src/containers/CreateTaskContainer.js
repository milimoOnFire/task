import {
    Button,
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CreateTaskModal from '../components/CreateTaskModal';
import Layout from '../layouts/layout';

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

const CreateTaskContainer = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Layout>
            <div className={classes.BtnContainer}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleOpen}
                >
                    Create Your First Task ;)
                </Button>
                <CreateTaskModal
                    open={open}
                    handleClose={handleClose}
                />
            </div>
        </Layout>
    );
};
export default CreateTaskContainer;
