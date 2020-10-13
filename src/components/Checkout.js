import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../state/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const StyledCheckout = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${({ theme }) => theme.color.white};
  height: max-content;
`;

const StyledCheckoutImg = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const StyledCheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.color.lightGray};
`;

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <StyledCheckout>
      <div>
        <StyledCheckoutImg
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="img"
        />
        <div>
          <h3>Hello, Guest</h3>
          <StyledCheckoutTitle>Your shopping Basket</StyledCheckoutTitle>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div>
        <h1>Cena razem</h1>
        <Subtotal />
      </div>
    </StyledCheckout>
  );
}
