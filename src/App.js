import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './style/GlobalStyle';
import { theme } from './style/theme';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';
import Footer from './components/Footer';
import Orders from './components/Orders';
import { auth } from './firebase';
import actions from './state/actions';
import { useStateValue } from './state/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51HcB7qEgLCvfDbHybxx6Ya9KoVv0dvZLCf57ZmKGfCHXuiZglHDJAyp2RdJ3E3AdzixhdUU5WazElDtNSKotPMAz00cGhiwWmf'
);

function App() {
  const [{ user, basket }, dispatch] = useStateValue();
  // const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    // setDidMount(true);
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
    // return () => setDidMount(false);
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
            <Route path="/orders">
              <Header />
              <Orders />
              <Footer />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
              <Footer />
            </Route>
            <Route path="/payment">
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
