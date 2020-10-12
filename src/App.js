import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route path="/login"></Route>
            <Route path="/orders"></Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment"></Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
