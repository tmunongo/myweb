import React from 'react';
import ReactDOM from 'react-dom';
//import Apollo Client libraries
import { 
  ApolloClient, 
  ApolloProvider, 
  createHttpLink, 
  InMemoryCache, 
  } from '@apollo/client';

import AstroSpace from './assets/a-astro-space-font/AstroSpace.ttf'

//import routes
import Pages from './pages';

//import components
import GlobalStyle from './components/GlobalStyle';

//const uri = process.env.API_URI;
const cache = new InMemoryCache();

const client = new ApolloClient ({
  cache,
  uri: "http://localhost:4321/realm-api",
  headers: {
    //authorization: localStorage.getItem('token') || '',
    resolvers: {},
    connectToDevTools: true
  }
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
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
