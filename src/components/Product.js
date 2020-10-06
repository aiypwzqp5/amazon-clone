import React from 'react';
import styled from 'styled-components';

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
  return (
    <StyledProduct>
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
              <p>G</p>
            ))}
        </StyledProductRating>
      </StyledProductInfo>

      <img src={image} alt="img" />

      <button>Add to basket</button>
    </StyledProduct>
  );
}
