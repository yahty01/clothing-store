// @flow
import * as React from 'react';
import styled from 'styled-components';
import {ProductType} from "../../../../App";
import Photo from "../../../../assets/images/cotalogMainPhoto.jpg"


type CatalogProps = {
	products: ProductType[]
};

export const Catalog = ({products}: CatalogProps) => {


	return (
		<StyledMainDiv>
			{products.map(item => (
				<Card key={item.id}>
					<Image src={item.imageUrl} alt={item.title} />
					<Title>{item.title}</Title>
				</Card>
			))}
		</StyledMainDiv>
	);
};

const StyledMainDiv = styled.div`
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Card = styled.div`
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 16px 0;
`;

// Example usage:
// const items = [
//   { id: 1, imageUrl: 'https://example.com/image1.jpg', title: 'Item 1' },
//   { id: 2, imageUrl: 'https://example.com/image2.jpg', title: 'Item 2' },
//   { id: 3, imageUrl: 'https://example.com/image3.jpg', title: 'Item 3' },
// ];
// <Catalog items={items} />;
