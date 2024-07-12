import React from 'react';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import {Button} from "@mui/material";

export const Navigation = () => {
	return (
		<GeneralDiv>
			<DivForButton>

				<StyleForButton>
					<Button variant="contained" color={'inherit'} size={'small'}>
						<NavLink to="/" style={{textDecoration: 'none'}}>
							Главная/
						</NavLink>
					</Button>
				</StyleForButton>

				<StyleForButton>
					<Button variant="contained" color={'inherit'} size={'small'}>
						<NavLink to="/Basket" style={{textDecoration: 'none'}}>
							Корзина/
						</NavLink>
					</Button>
				</StyleForButton>

			</DivForButton>
		</GeneralDiv>
	);
};

const GeneralDiv = styled.div`
  height: 50px;
  width: 100%;
  background-color: cadetblue;
  display: flex;
  align-items: center;
`;

const DivForButton = styled.div`
  margin-left: 37%;
  display: flex;
`;

const StyleForButton = styled.div`
  padding: 0 5px;
`;
