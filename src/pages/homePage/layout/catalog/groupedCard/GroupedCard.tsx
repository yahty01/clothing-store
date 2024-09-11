import styled from "styled-components";
import * as React from "react";
import {ProductType} from "../../../../../store/useProducts";

type GroupedCardProps = {
	mainProduct: ProductType;
	secondaryProducts: ProductType[];
	onCardClick: (id: string) => void;
};
export const GroupedCard = ({mainProduct, secondaryProducts, onCardClick}: GroupedCardProps) => {
	return (
		<GroupedCardContainer>
			<MainImage src={mainProduct.imgUrl} alt={mainProduct.title}/>
			<GroupedCardTitles>
				{secondaryProducts.map(product => (
					<Title key={product.id} onClick={() => onCardClick(product.id)}>
						{product.title} →
					</Title>
				))}
			</GroupedCardTitles>
		</GroupedCardContainer>
	);
};
const GroupedCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  cursor: pointer;
`;
const MainImage = styled.img`
  width: 422px;
  height: 638px;
  object-fit: cover;
  object-position: center;
`;
const GroupedCardTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const Title = styled.h3`
  font-family: "Fira Mono", monospace;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }

  margin: 16px 0;
`;