import React from 'react-dom/client'
import App from './App'
import 'scss/index.scss'
import {ApolloProvider} from "@apollo/client";
import client from "apollo";
import UserProvider from "./shared/providers/UserProvider";

React.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <UserProvider>
      <App/>
    </UserProvider>
  </ApolloProvider>,
)


export {emailRegex} from "./helpers/regex";