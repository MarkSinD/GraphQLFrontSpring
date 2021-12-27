import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.js';
import {ThemeProvider} from "@material-ui/styles";
import customTheme from "./app/theme"
import CssBaseline from '@material-ui/core/CssBaseline';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/react-hooks";
import {createUploadLink} from "apollo-upload-client/public/index";

const httpLink = createUploadLink({uri: `http://localhost:8080/graphql`});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {fetchPolicy: 'network-only'},
        watchQuery: {fetchPolicy: 'network-only'},
        mutate: {errorPolicy: 'all'}
    },
    link: httpLink,
});

ReactDOM.render(
  <>
    <ApolloProvider client={client}>
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </ApolloProvider>
  </>,
  document.getElementById('root')
);

