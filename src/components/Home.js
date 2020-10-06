import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const StyledHomeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  max-width: 1500px;
`;

const StyledHomeImage = styled.img`
  width: 100%;
  z-index: -1;
  margin-bottom: -150px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const StyledHomeRow = styled.div`
  display: flex;
  z-index: 1;
  margin-left: 5px;
  margin-right: 5px;
`;

export default function Home() {
  return (
    <StyledHomeContainer>
      <StyledHomeImage
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="img"
      />
      <StyledHomeRow>
        <Product
          id="12321341"
          title="The lean startup"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Kolejny przykładowy tytuł który ma na celu dobicie  mnie
            bo musze to pisać"
          price={239.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_5X450_.jpg"
        />
      </StyledHomeRow>
      <StyledHomeRow>
        <Product
          id="4903850"
          title="Samsung jakis tam"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4903850"
          title="Samsung jakis tam"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="4903850"
          title="Samsung jakis tam"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </StyledHomeRow>
      <StyledHomeRow>
        <Product
          id="4903850"
          title="Samsung jakis tam"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_5X355_.jpg"
        />
      </StyledHomeRow>
    </StyledHomeContainer>
  );
}