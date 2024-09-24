import styled from "styled-components";
import {theme} from "../../../../../_globalStyles/theme";

export const GroupedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
	margin-left: 150px;
	margin-right: 82px;
	width: fit-content;
`;
export const MainImage = styled.img`
  //width: 422px;
  height: 900px;
  object-fit: cover;
  object-position: center;
`;
export const GroupedCardTitles = styled.div`
  display: flex;
  gap: 8px;
`;

export const Title = styled.h3`
  font-family: "Fira Mono", monospace;
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
  &&:first-child{
	  margin-right: 72px;
  }

  border-bottom: thin solid ${theme.underlining};

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    border-bottom-width: 0.5px;
  }
`;

export const NameProduct = styled.h3`
  font-family: "Fira Mono", monospace;
  font-weight: 500;
	font-size: 16px;
	margin-top: 33px;
	margin-bottom: 30px;
`;