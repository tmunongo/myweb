import React from 'react';
import ReactDOM from 'react-dom';
//import Apollo Client libraries
import { ApolloClient, ApolloProvider, createHttpLink } from '@apollo/client';

//import routes
import Pages from './pages';

const App = () => {
  return (
    <div>
      <Pages />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
