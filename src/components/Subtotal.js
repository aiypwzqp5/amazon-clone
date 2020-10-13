import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state/StateProvider';
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../state/reducer';
import Button from './Button';

const StyledSubtotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.bright};
  border: 1px solid ${({ theme }) => theme.color.brightGray};
  border-radius: 3px;
`;

const StyledGift = styled.small`
  display: flex;
  align-items: center;

  input {
    margin-right: 5px;
  }
`;

export default function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <StyledSubtotal>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item): <strong>{value}</strong>
            </p>
            <StyledGift>
              <input type="checkbox" /> This order contains a gift
            </StyledGift>
          </>
        )}
        value={getBasketTotal(basket)}
        prfix={'$'}
        decimalScale={2}
        displayType={'text'}
        thousandSeparator={true}
      />
      <Button onClick={(e) => history.push('/payment')}>
        Proceed to Checkout
      </Button>
    </StyledSubtotal>
  );
}
