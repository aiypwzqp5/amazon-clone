import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import Cached from '@material-ui/icons/Cached';

const StyledFooter = styled.footer``;
const StyledFooterSection = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  background: ${({ theme, bgColor }) =>
    bgColor ? theme.color.footerThemeColor2 : theme.color.footerThemeColor};
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  padding: 40px 0px;

  &:last-child {
    padding-top: 0px;
  }
`;
const StyledFooterChangeLang = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.color.footerThemeColor};
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 38px 0px;
  color: ${({ theme }) => theme.color.white};
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
const StyledLoginLogo = styled.img`
  width: 80px;
  margin: 14px 94px 0 0;
`;
const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ margin }) => (margin ? ' 34px ' : '54px ')};
  &:last-child {
    margin-right: 0px;
  }
`;
const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, fontColor }) =>
    fontColor ? theme.color.footerThemeFontColor : theme.color.white};
  font-size: ${({ fontSize }) => (fontSize ? '12px' : '13px')};
  margin: 4px 0px;
  width: ${({ width }) => (width ? 'null' : '196px')};
  padding: ${({ padding }) => (padding ? '0px 8px' : null)};
  :hover {
    text-decoration: underline;
  }
  > h3 {
    font-weight: 700;
    font-size: 16px;
  }
  > span {
    padding: 8px 0px;
    font-size: 11px;
    > h4 {
      font-weight: bold;
      color: ${({ theme }) => theme.color.footerThemeFontColor};
    }
    > small {
      color: ${({ theme }) => theme.color.footerThemeFontColor2};
    }
  }
`;
const StyledFooterButton = styled(Button)`
  background: ${({ theme }) => theme.color.footerButtonColor};
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 13px;
  cursor: pointer;
`;

const StyledFooterIcon = styled(Cached)`
  margin-right: 6px;
`;
const StyledFooterSummary = styled.div`
  padding: 24px 0px 0px 0px;
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
      <StyledFooterSection bgColor>
        <StyledFooterColumn margin>
          <StyledFooterLink width>
            <span>
              <h4>Amazon Advertising</h4>
              <small>
                Znajdź, przyciągnij, zaangażuj <br /> klientów
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Magazyn książek</h4>
              <small>
                Ksiązki objęte darmową <br /> dostawą na całym świecie
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Warehouse Deals</h4>
              <small>
                Produkty w otwartych opakowaniach <br /> w obinżonych cenach
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin>
          <StyledFooterLink width>
            <span>
              <h4>Amazon Music</h4>
              <small>
                Miliony utworów <br /> do strumieniowania
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>IMDb</h4>
              <small>
                Filmy, seriale <br /> i gwiazdy
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>ZVAB</h4>
              <small>
                Centralny katalog <br />
                książek antykwarycznych
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin>
          <StyledFooterLink width>
            <span>
              <h4>AbeBooks</h4>
              <small>
                Przedmioty unikatowe i kolekcjonerskie <br />
                Książki
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Kindle Direct Publishing</h4>
              <small>
                Proste publikowanie <br />
                niezależnych wydawnictw
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Amazon Business</h4>
              <small>
                Płatność na podstawie faktury. Polecenia zapłaty. <br />
                Dla klientów biznesowych
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin>
          <StyledFooterLink width>
            <span>
              <h4>Amazon Web Services</h4>
              <small>
                Skalowalna chmura <br />
                Usługi obliczeniowe
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Prime Now</h4>
              <small>
                Dostawa w 2 godziny <br />
                podstawowych produktów
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Amazon Second Chance</h4>
              <small>
                Przekaż je komuś innemu, odsprzedaj, <br />
                daj im drugie życie
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin>
          <StyledFooterLink width>
            <span>
              <h4>Audible</h4>
              <small>
                Pobieranie <br />
                audiobooków
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink width>
            <span>
              <h4>Shopbop</h4>
              <small>
                Projektanci <br />
                Marki odzieżowe
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
      </StyledFooterSection>
      <StyledFooterSection bgColor>
        <StyledFooterLink width fontSize fontColor padding>
          Warunki użytkowania i sprzedaży
        </StyledFooterLink>
        <StyledFooterLink width fontSize fontColor padding>
          Zasady ochrony prywatności
        </StyledFooterLink>
        <StyledFooterLink width fontSize fontColor padding>
          Impressum
        </StyledFooterLink>
        <StyledFooterLink width fontSize fontColor padding>
          Cookies
        </StyledFooterLink>
        <StyledFooterLink width fontSize fontColor padding>
          Reklamy dopasowane do zainteresowań
        </StyledFooterLink>
        <StyledFooterLink width fontSize>
          <span>
            <small>© 1998-2020 Amazon.com Inc. lub sp. powiązane</small>
          </span>
        </StyledFooterLink>
      </StyledFooterSection>
    </StyledFooter>
  );
}

export default Footer;
