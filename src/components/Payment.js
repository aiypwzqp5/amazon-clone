import React from 'react';
import styled from 'styled-components';
import CurrencyFormat from 'react-currency-format';
import { Link, useHistory } from 'react-router-dom';

import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../state/StateProvider';
import getBasketTotal from '../state/reducer';
import Button from './Button';

const StyledPayment = styled.div`
  background-color: ${({ theme }) => theme.color.white};
`;
const StyledPaymentContainer = styled.div`
  > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: ${({ theme }) => theme.color.darkGray};
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
    > a {
      text-decoration: none;
    }
  }
`;
const StyledPaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;
const StyledPaymentTitle = styled.div`
  flex: 0.2;
`;
const StyledPaymentAddress = styled.div`
  flex: 0.8;
`;
const StyledPaymentItems = styled.div`
  flex: 0.8;
`;
const StyledPaymentDetalis = styled.div`
  flex: 0.8;
  > form {
    max-width: 400px;
  }
  > h3 {
    padding-bottom: 20px;
  }
`;

export default function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <StyledPayment>
      <StyledPaymentContainer>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <StyledPaymentSection>
          <StyledPaymentTitle>
            <h3>Delivery Address</h3>
          </StyledPaymentTitle>
          <StyledPaymentAddress>
            {/* <p>{user?.email}</p> */}
            <p>Email</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </StyledPaymentAddress>
        </StyledPaymentSection>

        <StyledPaymentSection>
          <StyledPaymentTitle>
            <h3>Review items and delivery</h3>
          </StyledPaymentTitle>
          <StyledPaymentItems>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </StyledPaymentItems>
        </StyledPaymentSection>

        <StyledPaymentSection>
          <StyledPaymentTitle>
            <h3>Payment Method</h3>
          </StyledPaymentTitle>
          <StyledPaymentDetalis>
            <form>
              <div>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={0}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                />
              </div>
            </form>
          </StyledPaymentDetalis>
        </StyledPaymentSection>
      </StyledPaymentContainer>
    </StyledPayment>
  );
}
