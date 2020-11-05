import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import actions from '../state/actions';
import { useStateValue } from '../state/StateProvider';

const StyledProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;

  background-color: ${({ theme }) => theme.color.white};
  z-index: 1;

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }
`;

const StyledProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
`;

const StyledProductPrice = styled.p`
  margin-top: 5px;
`;

const StyledProductRating = styled.div`
  display: flex;
`;

export default function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: actions.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <StyledProduct>
      {console.log(id, title, image, price, rating)}
      <StyledProductInfo>
        <p>{title}</p>
        <StyledProductPrice>
          <small>$</small>
          <strong>{price}</strong>
        </StyledProductPrice>
        <StyledProductRating>
          {Array(rating)
            .fill()
            .map((i) => (
              <p>🌟</p>
            ))}
        </StyledProductRating>
      </StyledProductInfo>

      <img src={image} alt="img" />

      <Button width={100} onClick={addToBasket}>
        Add to basket
      </Button>
    </StyledProduct>
  );
}
