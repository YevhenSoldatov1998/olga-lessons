import React from 'react-dom/client'
import App from './App'
import 'scss/index.scss'
import {ApolloProvider} from "@apollo/client";
import client from "apollo";
import UserProvider from "./shared/providers/UserProvider";
import {store} from 'store'
import {Provider} from 'react-redux'


React.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <UserProvider>
        <App/>
      </UserProvider>
    </Provider>
  </ApolloProvider>,
)


export {emailRegex} from "./helpers/regex";