// require('dotenv').config()
import React from 'react'
import ReactDOM from 'react-dom'
//import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

//import routes
import Pages from './pages'

//import components
import GlobalStyle from './components/GlobalStyle'

//const uri = process.env.API_URI;
const cache = new InMemoryCache()

const uri = process.env.API_URI

const client = new ApolloClient({
  cache,
  uri: uri,
  headers: {
    //authorization: localStorage.getItem('token') || '',
    resolvers: {},
    connectToDevTools: true,
  },
})
/*
const data = {
  isLoggedIn: !!localStorage.getItem('token')
};

//write the cache data on initial load
cache.modify({ data });
//write cache data after cache is reset
client.onResetStore(() => cache.modify({ data }));
*/
const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Pages />
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
