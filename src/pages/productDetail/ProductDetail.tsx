import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {SelectChangeEvent} from '@mui/material';
import {theme} from '../../_globalStyles/theme';
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
		},		{
			original: product.imgUrl,
			thumbnail: product.imgUrl,
		},		{
			original: product.imgUrl,
			thumbnail: product.imgUrl,
		},
	];

	const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = (e.target as HTMLDivElement).getBoundingClientRect();
		const clickX = e.clientX - rect.left;
		const width = rect.width;

		if (clickX < width / 2) {
			// Clicked on the left half
			galleryRef.current?.slideToIndex(galleryRef.current?.getCurrentIndex() - 1);
		} else {
			// Clicked on the right half
			galleryRef.current?.slideToIndex(galleryRef.current?.getCurrentIndex() + 1);
		}
	};

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
					<StyledImageGalleryWrapper onClick={handleImageClick}>
						<ImageGallery
							ref={galleryRef}
							items={images}
							showPlayButton={false}
							showFullscreenButton={false}
							showNav={false}
							showThumbnails={true}
							infinite={true}
							autoPlay={false}
							slideDuration={550}
							additionalClass="custom-gallery"
						/>
					</StyledImageGalleryWrapper>
				</Grid>

				<Grid>
					<Title>{product.title}</Title>
					<Price>{product.price}₽</Price>
					<FormControl fullWidth size="small"  variant="standard" color={"secondary"}>
						<InputLabel id="size-select-label">Размер:</InputLabel>
						<Select
							labelId="size-select-label"
							id="size-select"
							value={selectedSize} // Отображаем выбранный размер
							onChange={handleSizeChange} // Обработка выбора размера
							disabled={product.size_s_quantity === 0 && product.size_m_quantity === 0 && product.size_c_quantity === 0}
						>
							{product.size_s_quantity > 0 && <MenuItem value="S">S</MenuItem>}
							{product.size_m_quantity > 0 && <MenuItem value="M">M</MenuItem>}
							{product.size_c_quantity > 0 && <MenuItem value="Единый">Единый</MenuItem>}
						</Select>
					</FormControl>
					<Compound>Состав: {product.compound}</Compound>
					<StyledButton
						sx={{textTransform: 'none'}}
						onClick={handleAddToBasket}
						disabled={!selectedSize} // Отключаем кнопку, если размер не выбран
					>
						Добавить в корзину
					</StyledButton>
				</Grid>
			</Grid>
		</StyledProductDetail>
	);
};

const StyledProductDetail = styled.div`
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
	margin: 0 auto;

  button {
    font-family: "Fira Code", monospace;
  }
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
  && {
    font-size: 16px;
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};
    border-radius: 8px;
    padding: 8px 16px;

    &:hover {
      background-color: transparent;
      color: ${theme.secondaryTextColor};
      box-shadow: none;
    }
  }
`;

export default ProductDetail;
