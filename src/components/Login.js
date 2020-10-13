import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import Button from './Button';

const StyledLogin = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginLogo = styled.img`
  margin: 20px auto;
  object-fit: contain;
  width: 100px;
`;

const StyledLoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.brightGray};
  padding: 20px;

  > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  > p {
    margin-top: 15px;
    font-size: 12px;
  }

  > form > h5 {
    margin-bottom: 5px;
  }

  > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.color.white};
    width: 98%;
  }
`;

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <StyledLogin>
      <Link to="/">
        <StyledLoginLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>
      <StyledLoginContainer>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" onClick={signIn} borderRadius={2} height={30}>
            Sign In
          </Button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <Button noBgColor onClick={register} borderColor="darkgrey" height={30}>
          Create your account
        </Button>
      </StyledLoginContainer>
    </StyledLogin>
  );
}
