import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import Cached from '@material-ui/icons/Cached';

const StyledFooter = styled.footer`
  width: 100%;
`;
const StyledFooterSection = styled.div`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.color.footerThemeColor};
  color: ${({ theme }) => theme.color.white};
  padding: 40px;
`;
const StyledFooterChangeLang = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.footerThemeColor};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 48px 0px;
  color: ${({ theme }) => theme.color.white};
`;
const StyledLoginLogo = styled.img`
  width: 80px;
  margin: 14px 94px 0 0;
`;
const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 54px;
  > h3 {
    font-weight: 700;
    font-size: 16px;
  }
`;
const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 13px;
  margin: 4px 0px;
  width: 196px;
  :hover {
    text-decoration: underline;
  }
`;
const StyledFooterButton = styled(Button)`
  background: ${({ theme }) => theme.color.footerButtonColor};
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 13px;
  cursor: pointer;
`;

const StyledFooterSpanLang = styled.span`
  height: 30px;
  padding: 3px 32px 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
  > h5 {
    font-size: 14px;
    font-weight: normal;
  }
`;

const StyledFooterIcon = styled(Cached)`
  margin-right: 6px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFooterButton height={50}>Powrót do góry</StyledFooterButton>
      <StyledFooterSection>
        <StyledFooterColumn>
          <h3>O nas</h3>
          <StyledFooterLink to="#">Praca</StyledFooterLink>
          <StyledFooterLink to="#">Informacje prasowe</StyledFooterLink>
          <StyledFooterLink to="#">O nas</StyledFooterLink>
          <StyledFooterLink to="#">Blog</StyledFooterLink>
          <StyledFooterLink to="#">Zrównoważony rozwój</StyledFooterLink>
          <StyledFooterLink to="#">Amazon Logistikblog</StyledFooterLink>
          <StyledFooterLink to="#">Impressum</StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <h3>Zarabiaj z nami</h3>
          <StyledFooterLink to="#">Sprzedawaj na Amazon</StyledFooterLink>
          <StyledFooterLink to="#">
            Sprzedawaj pod marką własną
          </StyledFooterLink>
          <StyledFooterLink to="#">
            Sprzedawaj na Amazon Business
          </StyledFooterLink>
          <StyledFooterLink to="#">
            Sprzedawaj na Amazon Handmade
          </StyledFooterLink>
          <StyledFooterLink to="#">Program partnerski</StyledFooterLink>
          <StyledFooterLink to="#">Realizacja przez Amazon</StyledFooterLink>
          <StyledFooterLink to="#">Sprzedawaj w ramach Prime</StyledFooterLink>
          <StyledFooterLink to="#">Zareklamuj swoje produkty</StyledFooterLink>
          <StyledFooterLink to="#">
            Wydawaj z nami niezależne publikacje
          </StyledFooterLink>
          <StyledFooterLink to="#">Amazon Pay</StyledFooterLink>
          <StyledFooterLink to="#">Hostowanie Amazon Hub</StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <h3>Metody płatności Amazon</h3>
          <StyledFooterLink to="#">
            Karta Amazon.de Visa (usługa dostępna obecnie w Niemczech i Austrii)
          </StyledFooterLink>
          <StyledFooterLink to="#">Zakupy za punkty</StyledFooterLink>
          <StyledFooterLink to="#">Karty kredytowe</StyledFooterLink>
          <StyledFooterLink to="#">Karty podarunkowe</StyledFooterLink>
          <StyledFooterLink to="#">
            Płatność na podstawie faktury (usługa dostępna obecnie w Niemczech i
            Austrii)
          </StyledFooterLink>
          <StyledFooterLink to="#">Amazon Currency Converter</StyledFooterLink>
          <StyledFooterLink to="#">Doładuj konto Amazon</StyledFooterLink>
          <StyledFooterLink to="#">Doładowanie w sklepie</StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn>
          <h3>Potrzebujesz pomocy?</h3>
          <StyledFooterLink to="#">Amazon i COVID-19</StyledFooterLink>
          <StyledFooterLink to="#">
            Śledź przesyłki lub wyświetl zamówienia
          </StyledFooterLink>
          <StyledFooterLink to="#">Koszty i zasady dostaw</StyledFooterLink>
          <StyledFooterLink to="#">Amazon Prime</StyledFooterLink>
          <StyledFooterLink to="#">Zwroty i wymiana</StyledFooterLink>
          <StyledFooterLink to="#">
            Recykling (włącznie z utylizacją sprzętu elektrycznego i
            elektronicznego)
          </StyledFooterLink>
          <StyledFooterLink to="#">
            Zarządzanie zawartością i urządzeniami
          </StyledFooterLink>
          <StyledFooterLink to="#">Aplikacja Amazon</StyledFooterLink>
          <StyledFooterLink to="#">Amazon Assistant</StyledFooterLink>
          <StyledFooterLink to="#">Obsługa klienta</StyledFooterLink>
        </StyledFooterColumn>
      </StyledFooterSection>
      <StyledFooterChangeLang>
        <StyledLoginLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
        <StyledFooterSpanLang>
          <StyledFooterIcon />
          <h5>Polski</h5>
        </StyledFooterSpanLang>
        <StyledFooterSpanLang>
          <StyledFooterIcon />
          <h5>Niemcy</h5>
        </StyledFooterSpanLang>
      </StyledFooterChangeLang>
    </StyledFooter>
  );
}

export default Footer;
