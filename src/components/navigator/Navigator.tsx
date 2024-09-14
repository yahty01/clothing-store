import React from 'react';
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import { theme } from "../../_globalStyles/theme";
import logoA from '../../assets/images/logoA.svg';
import {useBasket} from "../../pages/basket/BasketContext";

export const Navigation = () => {
	const navigate = useNavigate();
	const { basket } = useBasket(); // Получаем товары в корзине

	const handleNavigate = (path: string) => {
		navigate(path);
	};

	return (
		<GeneralDiv>
			<DivForButton>

				<LogoLink to="/">
					<Logo src={logoA} alt="logo" />
				</LogoLink>

				<StyleDivForButton style={{padding: '30px'}}>
					<StyledButton sx={{textTransform: 'none'}} onClick={() => handleNavigate('/Basket')} variant="text" size="small">
						<StyledNavLink to="/Basket">Корзина/</StyledNavLink>
						{basket.length !== 0 ? <BasketCount>{basket.length}</BasketCount> : ''} {/* Отображаем количество товаров */}
					</StyledButton>
				</StyleDivForButton>
			</DivForButton>
		</GeneralDiv>
	);
};

const GeneralDiv = styled.div`
  height: 65px;
  width: 100%;
  background-color: ${theme.mainBackgroundColor};
  display: flex;
  align-items: center;
`;

const DivForButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyleDivForButton = styled.div`
  padding: 0 5px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};
    border-radius: 8px;
    padding: 8px 16px;

    &:hover {
      background-color: transparent;
      color: ${theme.secondaryTextColor};
      box-shadow: none;
    }
  }
`;

const LogoLink = styled(NavLink)`
  margin-right: 16px;
  margin-left: 70px;
`;

const Logo = styled.img`
  width: 49px; // Установите размер логотипа
  height: 42px;
`;

const StyledNavLink = styled(NavLink)`
  font-family: "Fira Mono", monospace;
  text-decoration: none;
  color: inherit;
`;

const BasketCount = styled.span`
  background-color: ${theme.secondaryTextColor};
  color: ${theme.mainBackgroundColor};
  border-radius: 50%;
  padding: 2px 8px;
  margin-left: 8px;
  font-size: 12px;
`;
