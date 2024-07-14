// @flow
import * as React from 'react';
import styled from "styled-components";
import Photo from "../../../../../assets/images/cotalogMainPhoto.jpg"
import {theme} from "../../../../../styles/theme";

type StoreDescriptionProps = {

};
export const StoreDescription = (props: StoreDescriptionProps) => {
	return (
		<StyledMainDiv>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur delectus, ducimus enim esse incidunt, ipsum labore laborum libero necessitatibus perferendis ratione reiciendis repellat reprehenderit, saepe sed tenetur ut voluptatibus.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium at debitis doloribus eos impedit ipsum laboriosam modi nam nobis provident quaerat quis quos saepe soluta, ullam unde vero voluptates?</p>
			<div>
				<a href="#">К каталогу →</a>
				<img src={Photo} alt="#"/>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa doloremque eveniet facilis impedit minima nemo perferendis soluta unde veritatis. Aperiam autem eaque maiores minima molestias. Beatae magnam nostrum rerum.</p>
		</StyledMainDiv>
	);
};

const StyledMainDiv = styled.div`
	display: flex;
	font-size: 12px;
	justify-content: space-around;
  align-items: center;
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