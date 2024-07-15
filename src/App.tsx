import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket } from './pages/basket/Basket';
import { HomePage } from './pages/homePage/HomePage';
import { Navigation } from './components/navigator/Navigator';
import jacket from './assets/images/jacket.jpg';
import corset from './assets/images/corset.svg';
import bigPhoto from './assets/images/bigphoto.jpg';
import dress from './assets/images/dress.jpg';
import { v1 } from 'uuid';
import ProductDetail from "./pages/homePage/layout/catalog/productDetail/ProductDetail";

export type ProductType = {
	id: string;
	imageUrl: string;
	title: string;
	price: number
	size: string[]
};

export type ProductsType = ProductType[];

const products: ProductsType = [
	{ id: v1(),
		imageUrl: jacket,
		title: 'Жакет',
		price: 8500,
		size:['S','M']
	},
	{
		id: v1(),
		imageUrl: corset,
		title: 'Корсет White Swan',
		price: 5900,
		size:['S','M']
	},
	{
		id: v1(),
		imageUrl: bigPhoto,
		title: 'Batist set',
		price: 7200,
		size:['S','M']
	},
	{
		id: v1(),
		imageUrl: dress,
		title: 'Платье Dream dress',
		price: 14900,
		size:['S','M']
	},
];

function App() {
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage products={products} />} />
				<Route path="/Basket" element={<Basket />} />
				<Route path="/product/:id" element={<ProductDetail products={products} />} /> {/* Новый маршрут */}
				<Route path="/404" element={<h1 style={{ textAlign: 'center' }}>404:PAGE NOT FOUND</h1>} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
}

export default App;