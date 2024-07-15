// @flow
import * as React from 'react';
import styled from 'styled-components';
import {ProductType} from "../../../../App";


type CatalogProps = {
	products: ProductType[]
};

export const Catalog = ({products}: CatalogProps) => {


	return (
		<StyledCatalog>
			{products.map(item => (
				<Card key={item.id}>
					<Image src={item.imageUrl} alt={item.title} />
					<Title>{item.title}</Title>
				</Card>
			))}
		</StyledCatalog>
	);
};

const StyledCatalog = styled.section`
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 109px;
	padding-left: 28.75%;
	padding-right: 21.6%;
`;

const Card = styled.div`
  width: fit-content;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 422px;
  height: 638px;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h3`
	&:hover{
		cursor: pointer;
	}
  margin: 16px 0;
`;
