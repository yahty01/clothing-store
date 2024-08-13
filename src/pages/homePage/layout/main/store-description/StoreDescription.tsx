// @flow
import * as React from 'react';
import styled from "styled-components";
import Photo from "../../../../../assets/images/catalogmain_photo.jpg"
import {theme} from "../../../../../styles/theme";
import Grid from '@mui/material/Unstable_Grid2';


type StoreDescriptionProps = {

};
export const StoreDescription = (props: StoreDescriptionProps) => {
	return (
		<StyledMainDiv>
			<StyledMainGrid container spacing={0} flexDirection={'row'} justifyContent={'space-between'}>
				<Grid  xs={12} sm={6} md={4} lg={3} xl={2} alignSelf={'flex-start'}>
					<p>VYACHESLÁVNA начинает свое путешествие, вкладывая в каждый шов и каждый паттерн бесценные частицы творчества</p>
				</Grid>
				<Grid  xs={12} sm={6} md={4} lg={3} xl={2} alignSelf={'flex-end'}>
					<p>как распускающийся бутон редкого цветка, медленно и уверенно раскрывающий свое великолепие</p>
				</Grid>
				<Grid  xs={12} sm={6} md={4} lg={3} xl={2} alignSelf={'center'}>
					<div>
						<a href="#">К каталогу →</a>
						<img src={Photo} alt="#"/>
					</div>			</Grid>
				<Grid  xs={12} sm={6} md={4} lg={3} xl={2} alignSelf={'center'}>
					<p >Каждое изделие — воплощение женственности, капля изысканности, которую можно почувствовать, дотронувшись до
						ткани</p>
				</Grid>
			</StyledMainGrid>
		</StyledMainDiv>
	);
};

const StyledMainGrid = styled(Grid)`
	display: flex;
	font-size: 12px;
	justify-content: space-around;
  align-items: center;
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 600;
	line-height: 1.5;
  letter-spacing: 0.15em; 
  font-style: normal;
  min-height: calc(1082px - 529px - 57px - 51px);
  p {
		width: 208px;
	}
	div {
		a {
			color: ${theme.mainTextColor};
      border-bottom: ${theme.secondaryTextColor} 0.5px solid;
    }
		img{
			margin-top: 34px;
		}
	}
	flex-grow: 1;
`

const StyledMainDiv = styled.div`
	margin-top: 57px;
	margin-left: calc(314% / (1920/100));
	margin-right: calc(195% / (1920/100));
	min-height: calc(1082px - 529px - 57px);
`