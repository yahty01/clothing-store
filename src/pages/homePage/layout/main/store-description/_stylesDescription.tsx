import styled from "styled-components";
import {theme} from "../../../../../_globalStyles/theme";

export const StyledMainDiv = styled.div`
  margin-top: 57px;
  margin-left: calc(314% / (1920 / 100));
  margin-right: calc(190% / (1920 / 100));
  min-height: calc(1082px - 529px - 57px);
	
	@media (max-width: 1000px) {
		
  }
`
export const StyledMainGrid = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.15em;
  font-style: normal;
  //min-height: calc(1082px - 529px - 57px);
	height: calc(1082px - 529px - 57px);
  p {
    width: 208px;
  }

  div {
    a {
      color: ${theme.mainTextColor};
      border-bottom: ${theme.secondaryTextColor} 0.5px solid;
	    cursor: pointer;
    }

    img {
      margin-top: 34px;
    }
  }

  flex-grow: 1;
`
export const PhotoDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`
export const FirstBigDiv = styled.div`
	height: 100%;	
	display: flex;
	justify-content: space-between;
  align-items: center;

  div {
  }

`
export const SecondBigDiv = styled.div`
	display: flex;
	height: 100%;
`

export const OneTextDiv = styled.div`
 align-self: flex-start;
`
export const TwoTextDiv = styled.div`
 align-self: flex-end;
	margin-left: 35px;
	margin-bottom: 50px;
`

export const ThreeTextDiv = styled.div`
	margin-right: 244px;
	margin-top: 130px;
	@media (max-width: 1750px) {
		margin-right: 150px;
	}	
	@media (max-width: 1530px) {
		margin-right: 100px;
	}
	
	@media (max-width: 1300px) {
		margin-right: 50px;
	}
`
export const FourTextDiv = styled.div`
	width: 212px;
	line-height: 1.5;
	margin-top: 80px;
	
	p {
		width: 100%;
	}
`
