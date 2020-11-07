import React, { useEffect } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { useStateValue } from '../state/StateProvider';
import { db } from '../firebase';
import actions from '../state/actions';

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
  const [{ items }, dispatch] = useStateValue();

  useEffect(() => {
    const getData = (response) => {
      const mappedResponse = response.docs.map((e) => e.data());
      dispatch({
        type: actions.ADD_ITEMS,
        items: mappedResponse,
      });
    };
    db.collection('Items').get().then(getData);
  }, []);

  return (
    <StyledHomeContainer>
      <StyledHomeImage
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="img"
      />
      <StyledHomeRow>
        {items.slice(1).map((item) => (
          <Product
            id={item.Id}
            title={item.title}
            rating={item.rating}
            image={item.image}
            price={item.price}
          />
        ))}
      </StyledHomeRow>
      <StyledHomeRow>
        {items.map((item) => (
          <Product
            id={item.Id}
            title={item.title}
            rating={item.rating}
            image={item.image}
            price={item.price}
          />
        ))}
      </StyledHomeRow>
      <StyledHomeRow>
        {items.slice(2).map((item) => (
          <Product
            id={item.Id}
            title={item.title}
            rating={item.rating}
            image={item.image}
            price={item.price}
          />
        ))}
      </StyledHomeRow>
    </StyledHomeContainer>
  );
}
