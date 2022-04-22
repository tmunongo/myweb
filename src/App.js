// require('dotenv').config()
import React from 'react'
import ReactDOM from 'react-dom'
//import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

//import routes
import Pages from './pages'

//import components
import GlobalStyle from './components/GlobalStyle'

const cache = new InMemoryCache()

const API_URI = process.env.REACT_APP_API_URI

const client = new ApolloClient({
  uri: API_URI,
  cache,
  headers: {
    //authorization: localStorage.getItem('token') || '',
    resolvers: {},
    connectToDevTools: true,
  },
  introspection: process.env.NODE_ENV !== 'production',
})

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
