// Catalog.tsx
import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../firebase';
import { ProductType } from '../../../../App';

type CatalogProps = {};

export const Catalog = ({}: CatalogProps) => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchProducts = async () => {
			const productsCollection = collection(db, 'products');
			const productSnapshot = await getDocs(productsCollection);
			const productList = productSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as ProductType[];
			setProducts(productList);
		};

		fetchProducts();
	}, []);

	const handleCardClick = (id: string) => {
		navigate(`/product/${id}`);
	};

	return (
		<StyledCatalog>
			{products.map(item => (
				<Card key={item.id} onClick={() => handleCardClick(item.id)}>
					<Image src={item.imgUrl} alt={item.title} />
					<Title>{item.title} →</Title>
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
  cursor: pointer; /* Добавляем курсор указателя */
`;

const Image = styled.img`
  width: 422px;
  height: 638px;
  object-fit: cover;
  object-position: center;
`;

const Title = styled.h3`
  &:hover {
    cursor: pointer;
  }
  margin: 16px 0;
`;