import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {SelectChangeEvent} from '@mui/material';
import 'react-image-gallery/styles/css/image-gallery.css';
import {useBasket} from "../basket/BasketContext";
import Grid from "@mui/material/Grid";
import BackButton from "../../components/BackButton";
import {ProductType} from "../../store/useProducts";
import {
	Compound,
	Price,
	StyledButton,
	StyledProductDetail,
	Title
} from "./_stylesProductDetail";
import ProductGallery from "./ProductGallary";


type ProductDetailProps = {
	products: ProductType[];
};

const ProductDetail = ({products}: ProductDetailProps) => {
	const {id} = useParams<{ id: string }>();
	const product = products.find((product) => product.id === id);
	const {addToBasket} = useBasket();

	const [selectedSize, setSelectedSize] = useState<string>('');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	if (!product) {
		return <div>Product not found</div>;
	}

	const images = [
		product.imgUrl,
		product.imgUrl,
		product.imgUrl,
	];

	const handleSizeChange = (event: SelectChangeEvent) => {
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

				<ProductGallery images={images} />

				<Grid>
					<Title>{product.title}</Title>
					<Price>{product.price}₽</Price>
					<FormControl fullWidth size="small" variant="standard" color={"secondary"}>
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

export default ProductDetail;
