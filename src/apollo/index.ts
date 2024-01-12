import {ApolloClient, createHttpLink, from, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'


const httpLink = createHttpLink({
  uri: 'https://api.beta.placemate.co/',
})

const authLink = setContext((value, {headers}: any) => {
  const token = window.localStorage.getItem('jwt')
  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  }
})
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
})

export default client
