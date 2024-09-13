import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {SelectChangeEvent} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import {useBasket} from "../basket/BasketContext";
import Grid from "@mui/material/Grid";
import BackButton from "../../components/BackButton";
import {ProductType} from "../../store/useProducts";

type ProductDetailProps = {
	products: ProductType[];
};

const ProductDetail = ({products}: ProductDetailProps) => {
	const {id} = useParams<{ id: string }>();
	const product = products.find((product) => product.id === id);
	const {addToBasket} = useBasket();

	const [selectedSize, setSelectedSize] = useState<string>(''); 
	const galleryRef = useRef<ImageGallery>(null);

	useEffect(() => {
		window.scrollTo(0, 0); 
	}, []);

	if (!product) {
		return <div>Product not found</div>;
	}

	const images = [
		{
			original: product.imgUrl,
			thumbnail: product.imgUrl,
		},
	];

	const handleSizeChange = (event: SelectChangeEvent<string>) => {
		setSelectedSize(event.target.value); 
	};

	const handleAddToBasket = () => {
		if (selectedSize) {
			const productWithSize: ProductType = {
				...product,
				sizeSelect: selectedSize,
			};
			addToBasket(productWithSize);
			setSelectedSize(''); 
		}
	};

	return (
		<StyledProductDetail>
			<BackButton/>
			<Grid container spacing={2}>
				<Grid>
					<StyledImageGalleryWrapper>
						<ImageGallery
							ref={galleryRef}
							items={images}
							showPlayButton={false}
							showFullscreenButton={false}
							showNav={false}
							showThumbnails={true}
						/>
					</StyledImageGalleryWrapper>
				</Grid>

				<Grid>
					<Title>{product.title}</Title>
					<Price>{product.price}₽</Price>
					<FormControl fullWidth size="small" variant="standard">
						<InputLabel id="size-select-label">Размер:</InputLabel>
						<Select
							labelId="size-select-label"
							id="size-select"
							value={selectedSize} 
							onChange={handleSizeChange} 
							disabled={product.size_s_quantity === 0 && product.size_m_quantity === 0 && product.size_c_quantity === 0}
						>
							{product.size_s_quantity > 0 && <MenuItem value="S">S</MenuItem>}
							{product.size_m_quantity > 0 && <MenuItem value="M">M</MenuItem>}
							{product.size_c_quantity > 0 && <MenuItem value="Единый">Единый</MenuItem>}
						</Select>
					</FormControl>
					<Compound>Состав: {product.compound}</Compound>
					<StyledButton
						onClick={handleAddToBasket}
						disabled={!selectedSize}
					>
						Добавить в корзину
					</StyledButton>
				</Grid>
			</Grid>
		</StyledProductDetail>
	);
};

const StyledProductDetail = styled.div`
  font-family: 'NEXT ART', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StyledImageGalleryWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-weight: semi-bold;
`;

const Price = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

const Compound = styled.p`
  margin: 10px 0;
`;

export const StyledButton = styled(Button)`
  font-size: 16px;
`;

export default ProductDetail;