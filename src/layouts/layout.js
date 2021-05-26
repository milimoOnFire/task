import {Button, Container, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import React from 'react';
// Init Styles
const useStyles = makeStyles(() => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
    },
    headBtn: {
        position: 'absolute',
        left: 0,
        top: '.76rem',
    },
}));
// Layout Component
const Layout = ({children,onBtnClick}) => {
    // Get Classes
    const classes = useStyles();
    // JSX Parts
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
                    {onBtnClick?<Button
                        size="small"
                        variant="contained"
                        color="primary"
                        className={classes.headBtn}
                        onClick={onBtnClick}
                    >View Done Tasks</Button>:null}
                </header>
                {children}
            </div>
        </Container>
    );
};

export default Layout;
