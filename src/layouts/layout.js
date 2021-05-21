import {Button, Container, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headBtn: {
        position: 'absolute',
        left: 0,
        top: '1.37rem',
    },
}));
const Layout = ({children}) => {
    const classes = useStyles();
    return (
        <Container
            component="main"
            maxWidth="md"
        >
            <CssBaseline />
            <div
                className={classes.paper}
            >
                <header>
                    <h3>Hello World!</h3>
                    <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.headBtn}
                    >View Done Tasks</Button>
                </header>
                {children}
            </div>
        </Container>
    );
};

export default Layout;
