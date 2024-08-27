// @flow
import * as React from 'react';
import styled from "styled-components";
import Photo from "../../../../../assets/images/catalogmain_photo.jpg"
import {theme} from "../../../../../styles/theme";
import Grid from '@mui/material/Unstable_Grid2';


type StoreDescriptionProps = {};
export const StoreDescription = (props: StoreDescriptionProps) => {
	return (
		<StyledMainDiv>
			<StyledMainGrid>

				<FirstBigDiv>
					<div style={{alignItems: "flex-start"}}>
						<p> VYACHESLÁVNA начинает свое путешествие, вкладывая в каждый шов и каждый паттерн бесценные
							частицы творчества</p>
					</div>
					<div>
						<p>как распускающийся бутон редкого цветка, медленно и уверенно раскрывающий свое великолепие</p>
					</div>
				</FirstBigDiv>

				<SecondBigDiv>
					<div>
						<PhotoDescription>
							<a href="#">К каталогу →</a>
							<img src={Photo} alt="#"/>
						</PhotoDescription></div>
					<div>
						<p>Каждое изделие — воплощение женственности, капля изысканности, которую можно почувствовать, дотронувшись
							до
							ткани</p>
					</div>

				</SecondBigDiv>
			</StyledMainGrid>
		</StyledMainDiv>

	);
};

const StyledMainDiv = styled.div`
  outline: 1px red solid;
  margin-top: 57px;
  margin-left: calc(314% / (1920 / 100));
  margin-right: calc(195% / (1920 / 100));
  min-height: calc(1082px - 529px - 57px);
`

const StyledMainGrid = styled.div`
  outline: 1px solid red;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  align-items: center;
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.15em;
  font-style: normal;
  min-height: calc(1082px - 529px - 57px);

  p {
    width: 208px;
  }

  div {
    a {
      color: ${theme.mainTextColor};
      border-bottom: ${theme.secondaryTextColor} 0.5px solid;
    }

    img {
      margin-top: 34px;
    }
  }

  flex-grow: 1;
`

const PhotoDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  outline: 1px red solid;
`

const FirstBigDiv = styled.div`
	div {
		outline: 1px red solid;
	}
	height: 100%;	
	display: flex;
	justify-content: space-between;
	
`
const SecondBigDiv = styled.div`
	display: flex;
	
`

