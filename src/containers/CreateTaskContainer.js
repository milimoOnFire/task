import {
    Button,
} from '@material-ui/core';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CreateTaskModal from '../components/CreateTaskModal';
import Layout from '../layouts/layout';
// Init Styles
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
// Main Create Task Container
const CreateTaskContainer = () => {
    // Get classes
    const classes = useStyles();
    // Modal UI Controller State
    const [open, setOpen] = React.useState(false);
    // Handle Modal Open
    const handleOpen = () => {
        setOpen(true);
    };
    // Handle Modal Close
    const handleClose = () => {
        setOpen(false);
    };
    // JSX Parts
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
