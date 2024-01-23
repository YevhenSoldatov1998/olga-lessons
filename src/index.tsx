import React from 'react-dom/client'
import App from './App'
import 'scss/index.scss'
import {ApolloProvider} from "@apollo/client";
import client from "apollo";

React.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
)




