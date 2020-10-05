import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

const StyledHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.header};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const StyledHeaderImg = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 18px 20px 0px 20px;
`;

const StyledHeaderSearch = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;

const StyledSearchInput = styled.input`
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
`;

const StyledSearchIcon = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: ${({ theme }) => theme.color.brightOrange1};
`;

const StyledHeaderNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

const StyledHeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: ${({ theme }) => theme.color.white};
`;

const StyledHeaderOptionLine = styled.span`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : null)};
  font-weight: ${({ fontWeight }) => (fontWeight ? `${fontWeight}` : null)};
  margin-left: ${({ marginLeft }) => (marginLeft ? `${marginLeft}px` : null)};
  margin-right: ${({ marginRight }) =>
    marginRight ? `${marginRight}px` : null};
`;

const StyledHeaderOptionBasket = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledHeaderImg src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>

      <StyledHeaderSearch>
        <StyledSearchInput type="text" />
        <StyledSearchIcon />
      </StyledHeaderSearch>

      <StyledHeaderNav>
        <Link to="/user">
          <StyledHeaderOption>
            <StyledHeaderOptionLine fontSize={10}>
              Hello Guest
            </StyledHeaderOptionLine>
            <StyledHeaderOptionLine fontSize={10} fontWeight={800}>
              Sign Out/Sign In
            </StyledHeaderOptionLine>
          </StyledHeaderOption>
        </Link>

        <Link to="/orders">
          <StyledHeaderOption>
            <StyledHeaderOptionLine fontSize={10}>
              Returns
            </StyledHeaderOptionLine>
            <StyledHeaderOptionLine fontSize={10} fontWeight={800}>
              & Orders
            </StyledHeaderOptionLine>
          </StyledHeaderOption>
        </Link>

        <StyledHeaderOption>
          <StyledHeaderOptionLine fontSize={10}>Your</StyledHeaderOptionLine>
          <StyledHeaderOptionLine fontSize={10} fontWeight={800}>
            Prime
          </StyledHeaderOptionLine>
        </StyledHeaderOption>

        <Link to="/checkout">
          <StyledHeaderOptionBasket>
            <ShoppingBasketIcon />
            <StyledHeaderOptionLine marginLeft={10} marginRight={10}>
              0
            </StyledHeaderOptionLine>
          </StyledHeaderOptionBasket>
        </Link>
      </StyledHeaderNav>
    </StyledHeader>
  );
}

export default Header;
