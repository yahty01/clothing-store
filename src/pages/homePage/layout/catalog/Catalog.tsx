// Catalog.tsx
import * as React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ProductType} from "../../../../store/useProducts";
import {GroupedCard, Title} from "./groupedCard/GroupedCard";

type CatalogProps = {
	products: ProductType[];
};

export const Catalog = ({ products }: CatalogProps) => {
	const navigate = useNavigate();

	const handleCardClick = (id: string) => {
		navigate(`/product/${id}`);
	};

	const renderProducts = () => {
		if (products.length <= 3) {
			// Отображаем все товары, если их 3 или меньше
			return products.map(item => (
				<Card key={item.id} onClick={() => handleCardClick(item.id)}>
					<Image src={item.imgUrl} alt={item.title} />
					<Title>{item.title} →</Title>
				</Card>
			));
		} else {
			// Отображаем 1-й и 2-й товары отдельно
			return (
				<>
					{products.slice(0, 2).map(item => (
						<Card key={item.id} onClick={() => handleCardClick(item.id)}>
							<Image src={item.imgUrl} alt={item.title} />
							<Title>{item.title} →</Title>
						</Card>
					))}
					{/* Отображаем 3-й и 4-й товары как сгруппированный элемент */}
					<GroupedCard
						mainProduct={products[2]}
						secondaryProducts={products.slice(2, 4)}
						onCardClick={handleCardClick}
					/>
					{/* Отображаем 5-й и последующие товары */}
					{products.slice(4).map(item => (
						<Card key={item.id} onClick={() => handleCardClick(item.id)}>
							<Image src={item.imgUrl} alt={item.title} />
							<Title>{item.title} →</Title>
						</Card>
					))}
				</>
			);
		}
	};

	return <StyledCatalog>{renderProducts()}</StyledCatalog>;
};

const StyledCatalog = styled.section`
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 109px;
  margin-left: 21.75%;
  max-width: calc(844px + 109px);
`;

const Card = styled.div`
  width: fit-content;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 422px;
  height: 638px;
  object-fit: cover;
  object-position: center;
`;

