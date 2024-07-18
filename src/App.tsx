import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket } from './pages/basket/Basket';
import { HomePage } from './pages/homePage/HomePage';
import { Navigation } from './components/navigator/Navigator';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductDetail from "./pages/homePage/layout/catalog/productDetail/ProductDetail";

export type ProductType = {
	id: string;
	imgUrl: string;
	title: string;
	price: number;
	size: string;
	compound: string;
};

export type ProductsType = ProductType[];

function App() {
	const [products, setProducts] = useState<ProductsType>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const productsCollection = collection(db, 'products');
			const productSnapshot = await getDocs(productsCollection);
			const productList = productSnapshot.docs.map(doc => ({
				id: doc.id,
				...doc.data()
			})) as ProductsType;
			setProducts(productList);
		};

		fetchProducts();
	}, []);

	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/Basket" element={<Basket />} />
				<Route path="/product/:id" element={<ProductDetail products={products} />} /> {/* Новый маршрут */}
				<Route path="/404" element={<h1 style={{ textAlign: 'center' }}>404:PAGE NOT FOUND</h1>} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
}

export default App;