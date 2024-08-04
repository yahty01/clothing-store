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
		<StyledMainDiv container spacing={0}>
			<Grid  xs={12} sm={6} md={4} lg={3} xl={2}>
				<p>VYACHESLÁVNA начинает свое путешествие, вкладывая в каждый шов и каждый паттерн бесценные частицы творчества</p>
			</Grid>
			<Grid  xs={12} sm={6} md={4} lg={3} xl={2}>
				<p>как распускающийся бутон редкого цветка, медленно и уверенно раскрывающий свое великолепие</p>
			</Grid>
			<Grid  xs={12} sm={6} md={4} lg={3} xl={2}>
				<div>
					<a href="#">К каталогу →</a>
					<img src={Photo} alt="#"/>
				</div>			</Grid>
			<Grid  xs={12} sm={6} md={4} lg={3} xl={2}>
				<p>Каждое изделие — воплощение женственности, капля изысканности, которую можно почувствовать, дотронувшись до
					ткани</p>
			</Grid>
		</StyledMainDiv>
	);
};

const StyledMainDiv = styled(Grid)`
	display: flex;
	font-size: 12px;
	justify-content: space-around;
  align-items: center;
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 600;
  font-style: normal;
  p {
		width: 108px;
	}
	div {
		a {
			color: ${theme.mainTextColor};
      border-bottom: ${theme.secondaryTextColor} 0.5px solid;
    }
		img{
			margin-top: 34px;
		}
		width: 191px;
		height: 208px;
	}
	flex-grow: 1;
`