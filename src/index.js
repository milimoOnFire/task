import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import store from '../src/redux/store';
// init Custom theme for future usage
const theme = createMuiTheme({
    palette: {},
});
// Render
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
