import React from 'react';
import styled from 'styled-components';

import { useStateValue } from '../state/StateProvider';
import actions from '../state/actions';
import Button from './Button';

const StyledCheckoutProduct = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 35px 0;
  }
`;

const StyledCheckoutProductInfo = styled.div`
  padding-left: 20px;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
`;

const StyledCheckoutProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

const StyledCheckoutProductTitle = styled.p`
  font-size: 17px;
  font-weight: 800;
  width: 300px;
  @media (max-width: ${({ theme }) => theme.device.md}) {
    font-weight: normal;
    text-align: center;
  }
`;

const StyledCheckoutProductRating = styled.div`
  display: flex;
`;

export default function CheckoutProduct({
  id,
  image,
  price,
  title,
  rating,
  hideButton,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: actions.REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <StyledCheckoutProduct>
      <StyledCheckoutProductImage src={image} />
      <StyledCheckoutProductInfo>
        <StyledCheckoutProductTitle>{title}</StyledCheckoutProductTitle>
        <p>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <StyledCheckoutProductRating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </StyledCheckoutProductRating>
        {!hideButton && (
          <Button width={200} onClick={removeFromBasket}>
            Remove from Basket
          </Button>
        )}
      </StyledCheckoutProductInfo>
    </StyledCheckoutProduct>
  );
}
