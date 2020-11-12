import React, { useState } from 'react';
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
  @media (max-width: ${({ theme }) => theme.device.xs}) {
    flex-direction: column;
    align-items: center;
  }
  > div {
    display: flex;
    @media (max-width: ${({ theme }) => theme.device.lg}) {
      flex-direction: column;
    }
    &:last-child {
      margin-left: 80px;
      @media (max-width: ${({ theme }) => theme.device.md}) {
        margin-left: 0;
      }
    }
  }
  &:last-child {
    padding-top: 0px;
  }
`;
const StyledLoginLogo = styled.img`
  width: 80px;
  margin: 14px 94px 0 0;
  @media (max-width: ${({ theme }) => theme.device.xs}) {
    margin: 14px 7px 0 0;
  }
`;
const StyledFooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ margin }) => (margin ? ' 34px ' : '54px ')};

  &:last-child {
    margin-right: 0px;
  }
  @media (max-width: ${({ theme }) => theme.device.lg}) {
    padding-top: 24px;
    margin-right: 0;
    margin-left: 34px;
  }
  @media (max-width: ${({ theme }) => theme.device.xs}) {
    margin-left: 0px;
    text-align: center;
  }
`;
const StyledFooterLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme, hasfontcolor }) =>
    hasfontcolor ? theme.color.footerThemeFontColor : theme.color.white};
  font-size: ${({ hasfontsize }) => (hasfontsize ? '12px' : '13px')};
  margin: 4px 0px;
  width: ${({ haswidth }) => (haswidth ? 'null' : '196px')};
  padding: ${({ haspadding }) => (haspadding ? '0px 8px' : null)};
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
  @media (max-width: ${({ theme }) => theme.device.xs}) {
    width: auto;
  }
`;
const StyledFooterButton = styled(Button)`
  background: ${({ theme }) => theme.color.footerButtonColor};
  border: none;
  color: ${({ theme }) => theme.color.white};
  font-size: 13px;
  cursor: pointer;
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
  transition: all 250ms;
`;
const StyledFooterSpanLang = styled.span`
  height: 30px;
  padding: 3px 16px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  > h5 {
    font-size: 14px;
    font-weight: normal;
  }
`;
const StyledFooterSwitchLang = styled.div`
  width: 600px;
  height: 300px;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.langFontColor};
  position: absolute;
  z-index: 200;
  animation-name: showBox;
  animation-duration: 750ms;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.langBorderColor};
  @media (max-width: ${({ theme }) => theme.device.lg}) {
    width: 300px;
    height: auto;
    justify-content: center;
    align-items: center;
  }
  > h3 {
    border-radius: 8px 8px 0 0;
    min-height: 56px;
    display: block;
    font-size: 18px;
    line-height: 3em;
    background-color: ${({ theme }) => theme.color.langPColor};
    border-bottom: 1px solid ${({ theme }) => theme.color.langBorderColor};
    text-indent: 40px;
    @media (max-width: ${({ theme }) => theme.device.lg}) {
      width: 100%;
    }
  }
  > div {
    display: flex;
    @media (max-width: ${({ theme }) => theme.device.lg}) {
      flex-direction: column;
    }
    &:last-child {
      justify-content: flex-end;
    }
    > div {
      padding: 20px;
      width: 50%;
      display: flex;
      flex-direction: column;
      @media (max-width: ${({ theme }) => theme.device.lg}) {
        width: auto;
        justify-content: center;
      }
      > h3 {
        font-weight: 700;
        font-size: 14px;
        padding-bottom: 8px;
      }
      > select {
        padding: 14px;
      }
      > div {
        > p {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
        }
        > h5 {
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
  @keyframes showBox {
    0% {
      opacity: 0;
      pointer-events: none;
    }
    100% {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
const StyledFooterIcon = styled(Cached)`
  margin-right: 6px;
`;

const StyledFooterLangButton = styled(Button)`
  width: auto;
  cursor: pointer;
  padding: 8px 11px;
  margin-left: 2px;
  border: 1px solid ${({ theme }) => theme.color.footerThemeFontColor2};
  &:last-child {
    margin-right: 18px;
  }
  @media (max-width: ${({ theme }) => theme.device.lg}) {
    width: 150px;
    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

function Footer() {
  const [lang, setLang] = useState(false);
  const [select, setSelect] = useState('Polski');
  const [newSelect, setNewSelect] = useState(select);

  const changeSelectLang = (event) => {
    setNewSelect(event);
  };
  const changeLang = () => {
    setLang(!lang);
    setSelect(newSelect);
  };
  return (
    <StyledFooter>
      <StyledFooterButton height={50} onClick={() => window.scrollTo(0, 0)}>
        Powrót do góry
      </StyledFooterButton>
      <StyledFooterSection>
        <div>
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
            <StyledFooterLink to="#">
              Sprzedawaj w ramach Prime
            </StyledFooterLink>
            <StyledFooterLink to="#">
              Zareklamuj swoje produkty
            </StyledFooterLink>
            <StyledFooterLink to="#">
              Wydawaj z nami niezależne publikacje
            </StyledFooterLink>
            <StyledFooterLink to="#">Amazon Pay</StyledFooterLink>
            <StyledFooterLink to="#">Hostowanie Amazon Hub</StyledFooterLink>
          </StyledFooterColumn>
        </div>
        <div>
          <StyledFooterColumn>
            <h3>Metody płatności Amazon</h3>
            <StyledFooterLink to="#">
              Karta Amazon.de Visa (usługa dostępna obecnie w Niemczech i
              Austrii)
            </StyledFooterLink>
            <StyledFooterLink to="#">Zakupy za punkty</StyledFooterLink>
            <StyledFooterLink to="#">Karty kredytowe</StyledFooterLink>
            <StyledFooterLink to="#">Karty podarunkowe</StyledFooterLink>
            <StyledFooterLink to="#">
              Płatność na podstawie faktury (usługa dostępna obecnie w Niemczech
              i Austrii)
            </StyledFooterLink>
            <StyledFooterLink to="#">
              Amazon Currency Converter
            </StyledFooterLink>
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
        </div>
      </StyledFooterSection>
      <StyledFooterChangeLang>
        <StyledLoginLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
        <StyledFooterSpanLang onClick={(e) => setLang(!lang)}>
          <StyledFooterIcon />
          <h5>{select}</h5>
        </StyledFooterSpanLang>
        {lang ? (
          <StyledFooterSwitchLang>
            <h3>Język</h3>
            <div>
              <div>
                <h3>Wybierz preferowany język:</h3>

                <select onChange={(e) => changeSelectLang(e.target.value)}>
                  <option value="Polski">Polski</option>
                  <option value="English">English</option>
                  <option value="Nederlands">Nederlands</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Cestina">Cestina</option>
                </select>
              </div>
              <div>
                <div>
                  <p>Tłumaczenie</p>
                  <h5>
                    Przetłumaczymy najważniejsze informacje dotyczące
                    wyszukiwania, zakupów i komunikacji.
                  </h5>
                </div>
                <div>
                  <p>Dodatkowe języki</p>
                  <h5>
                    Inne języki są dostępne na stronach Amazon w innych
                    lokalizacjach.
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <StyledFooterLangButton
                borderRadius={4}
                noBgColor={true}
                onClick={(e) => setLang(!lang)}
              >
                Anuluj
              </StyledFooterLangButton>
              <StyledFooterLangButton borderRadius={4} onClick={changeLang}>
                Zapisz zmiany
              </StyledFooterLangButton>
            </div>
          </StyledFooterSwitchLang>
        ) : null}
        <StyledFooterSpanLang>
          <h5>Aktualnie: {select}</h5>
        </StyledFooterSpanLang>
      </StyledFooterChangeLang>
      <StyledFooterSection bgColor={true}>
        <StyledFooterColumn margin={true}>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Amazon Advertising</h4>
              <small>
                Znajdź, przyciągnij, zaangażuj <br /> klientów
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Magazyn książek</h4>
              <small>
                Ksiązki objęte darmową <br /> dostawą na całym świecie
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Warehouse Deals</h4>
              <small>
                Produkty w otwartych opakowaniach <br /> w obinżonych cenach
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin={true}>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Amazon Music</h4>
              <small>
                Miliony utworów <br /> do strumieniowania
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>IMDb</h4>
              <small>
                Filmy, seriale <br /> i gwiazdy
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>ZVAB</h4>
              <small>
                Centralny katalog <br />
                książek antykwarycznych
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin={true}>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>AbeBooks</h4>
              <small>
                Przedmioty unikatowe i kolekcjonerskie <br />
                Książki
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Kindle Direct Publishing</h4>
              <small>
                Proste publikowanie <br />
                niezależnych wydawnictw
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Amazon Business</h4>
              <small>
                Płatność na podstawie faktury. Polecenia zapłaty. <br />
                Dla klientów biznesowych
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin={true}>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Amazon Web Services</h4>
              <small>
                Skalowalna chmura <br />
                Usługi obliczeniowe
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Prime Now</h4>
              <small>
                Dostawa w 2 godziny <br />
                podstawowych produktów
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Amazon Second Chance</h4>
              <small>
                Przekaż je komuś innemu, odsprzedaj, <br />
                daj im drugie życie
              </small>
            </span>
          </StyledFooterLink>
        </StyledFooterColumn>
        <StyledFooterColumn margin={true}>
          <StyledFooterLink to="#" haswidth={1}>
            <span>
              <h4>Audible</h4>
              <small>
                Pobieranie <br />
                audiobooków
              </small>
            </span>
          </StyledFooterLink>
          <StyledFooterLink to="#" haswidth={1}>
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
      <StyledFooterSection bgColor={true}>
        <StyledFooterLink
          to="#"
          haswidth={1}
          hasfontsize={1}
          hasfontcolor={1}
          haspadding={1}
        >
          Warunki użytkowania i sprzedaży
        </StyledFooterLink>
        <StyledFooterLink
          to="#"
          haswidth={1}
          hasfontsize={1}
          hasfontcolor={1}
          haspadding={1}
        >
          Zasady ochrony prywatności
        </StyledFooterLink>
        <StyledFooterLink
          to="#"
          haswidth={1}
          hasfontsize={1}
          hasfontcolor={1}
          haspadding={1}
        >
          Impressum
        </StyledFooterLink>
        <StyledFooterLink
          to="#"
          haswidth={1}
          hasfontsize={1}
          hasfontcolor={1}
          haspadding={1}
        >
          Cookies
        </StyledFooterLink>
        <StyledFooterLink
          to="#"
          haswidth={1}
          hasfontsize={1}
          hasfontcolor={1}
          haspadding={1}
        >
          Reklamy dopasowane do zainteresowań
        </StyledFooterLink>
        <StyledFooterLink to="#" haswidth={1} hasfontsize={1}>
          <span>
            <small>© 1998-2020 Amazon.com Inc. lub sp. powiązane</small>
          </span>
        </StyledFooterLink>
      </StyledFooterSection>
    </StyledFooter>
  );
}

export default Footer;
