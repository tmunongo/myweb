// require('dotenv').config()
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
//import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

//import routes
import Pages from './pages'

//import components
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/GlobalStyle'
import { useTheme } from './theme/useTheme'

const cache = new InMemoryCache()

const API_URI = process.env.REACT_APP_API_URI

const client = new ApolloClient({
  uri: API_URI,
  cache,
  headers: {
    resolvers: {},
    connectToDevTools: true,
  },
  introspection: process.env.NODE_ENV !== 'production',
})

const App = () => {
  const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(theme)

  useEffect(() => {
    setSelectedTheme(theme)
  }, [themeLoaded])

  return (
    <ApolloProvider client={client}>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <Pages />
        </ThemeProvider>
      )}
    </ApolloProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App
