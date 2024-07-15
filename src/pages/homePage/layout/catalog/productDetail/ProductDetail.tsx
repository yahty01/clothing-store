// ProductDetail.tsx
import * as React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import {ProductType} from "../../../../../App";

type ProductDetailProps = {
	products: ProductType[]
};

const ProductDetail = ({ products }: ProductDetailProps) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const product = products.find(p => p.id === id);

	if (!product) {
		return <div>Product not found</div>;
	}

	return (
		<StyledProductDetail>
			<Image src={product.imageUrl} alt={product.title} />
			<Title>{product.title}</Title>
			<Price>{product.price}₽</Price>
			<Sizes>Доступные размеры: {product.size.join(', ')}</Sizes> {/* Замените на реальные размеры */}
			<Button onClick={() => navigate(-1)}>Back</Button>
			<Button>Add to Cart</Button>
		</StyledProductDetail>
	);
};

const StyledProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

const Title = styled.h2`
  margin: 20px 0;
`;

const Price = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const Sizes = styled.p`
  margin: 10px 0;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

export default ProductDetail;