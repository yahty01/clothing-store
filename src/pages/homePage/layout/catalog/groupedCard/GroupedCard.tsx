import * as React from "react";
import {ProductType} from "../../../../../store/useProducts";
import {GroupedCardContainer, GroupedCardTitles, MainImage, NameProduct, Title} from "./_stylesGroupedCard";

type GroupedCardProps = {
	mainProduct: ProductType;
	secondaryProducts: ProductType[];
	onCardClick: (id: string) => void;
};
export const GroupedCard = ({mainProduct, secondaryProducts, onCardClick}: GroupedCardProps) => {
	return (
		<GroupedCardContainer>
			<MainImage src={mainProduct.imgUrl} alt={mainProduct.title}/>
			<NameProduct>Batist set</NameProduct>
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
