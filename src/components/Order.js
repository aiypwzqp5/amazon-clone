import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const StyledOrder = styled.div`
  padding: 40px;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.lightGray};
`;

const StyledOrderId = styled.p`
  position: absolute;
  top: 40px;
  right: 20px;
`;

const StyledOrderTotal = styled.h3`
  font-weight: 500;
  text-align: center;
`;

export default function Order({ order }) {
  return (
    <StyledOrder>
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <StyledOrderId>
        <small>{order.id}</small>
      </StyledOrderId>
      {order.data.basket?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <StyledOrderTotal>Order Total: {value}</StyledOrderTotal>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </StyledOrder>
  );
}
