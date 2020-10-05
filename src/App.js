import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route path="/login"></Route>
            <Route path="/orders"></Route>
            <Route path="/checkout"></Route>
            <Route path="/payment"></Route>
            <Route path="/">
              <Header />
            </Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
