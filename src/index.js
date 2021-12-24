import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import {ThemeProvider} from "@material-ui/styles";
import customTheme from "./app/theme"
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <>
    <CssBaseline />
    <ThemeProvider theme={customTheme}>
        <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

