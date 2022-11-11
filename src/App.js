// require('dotenv').config()
import React, { useState } from "react";
import ReactDOM from "react-dom";
//import Apollo Client libraries
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//import routes
import Pages from "./pages";

//import components
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Switch from "./components/Switch";
import { dark, light } from "./theme/themes.styled";

const cache = new InMemoryCache();

const API_URI = process.env.REACT_APP_API_URI;

const client = new ApolloClient({
  uri: API_URI,
  cache,
  headers: {
    resolvers: {},
    connectToDevTools: true,
  },
  introspection: process.env.NODE_ENV !== "production",
});

const App = () => {
  // const { theme, themeLoaded } = useTheme()
  const [selectedTheme, setSelectedTheme] = useState(dark);

  const updateState = () => {
    selectedTheme === light ? setSelectedTheme(dark) : setSelectedTheme(light);
  };

  return (
    <ApolloProvider client={client}>
      {
        <ThemeProvider theme={selectedTheme}>
          <HelmetProvider>
            <div className="switch-bar">
              <Switch handleThemeChange={updateState} theme={selectedTheme} />
            </div>
            <GlobalStyle />
            <Pages />
          </HelmetProvider>
        </ThemeProvider>
      }
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
