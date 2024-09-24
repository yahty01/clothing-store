import React, {useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import {Button} from "@mui/material";
import {theme} from "../_globalStyles/theme";

const BackButton = () => {
	const navigate = useNavigate();

	const handleGoBack = useCallback( ()=> {
		navigate(-1); // -1 означает возврат на одну страницу назад
	}, [navigate]);

	return (
		<StyledButton sx={{textTransform: 'none'}} onClick={handleGoBack}>
			Вернуться/
		</StyledButton>
	);
};

export default BackButton;

export const StyledButton = styled(Button)`
	font-size: 16px;
  && {
    font-family: 'Fira Mono', monospace;
    font-size: 16px;	
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