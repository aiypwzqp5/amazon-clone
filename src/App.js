import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';
import { auth } from './firebase';
import actions from './state/actions';
import { useStateValue } from './state/StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actions.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: actions.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/orders"></Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header />
              <Payment />
            </Route>
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
