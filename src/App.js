import './App.css';
import {makeStyles} from '@material-ui/core/styles';
import {Container, CssBaseline} from '@material-ui/core';
import CreateTask from './components/CreateTask';



const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                    <header>
                        <h1>Hello World!</h1>
                    </header>
                    <CreateTask />
                    </div>
        </Container>
    );
};

export default App;
