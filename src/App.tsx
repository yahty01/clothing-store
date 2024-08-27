import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Basket } from './pages/basket/Basket';
import { HomePage } from './pages/homePage/HomePage';
import { Navigation } from './components/navigator/Navigator';
import ProductDetail from "./pages/homePage/layout/catalog/productDetail/ProductDetail";
import { PageNotFound } from "./components/404/PageNotFound";
import { Footer } from "./components/footer/Footer";
import { BasketProvider } from './components/BasketContext';
import OrderForm from "./pages/basket/OrderForm";
import PaymentStatus from "./pages/PaymentStatus";
import styled from "styled-components";

export type ProductType = {
	id: string;
	imgUrl: string;
	title: string;
	price: number;
	size: string[];
	compound: string;
};

function App() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch('https://vyacheslavna.ru/products.php');
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setProducts(data);
				setLoading(false);
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
				} else {
					setError('An unexpected error occurred');
				}
				setLoading(false);
			}
		}
		fetchProducts();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error loading products: {error}</p>;

	return (
		<BasketProvider>
			<StyledApp className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<HomePage products={products} />} />
					<Route path="/basket" element={<Basket />} />
					<Route path="/order" element={<OrderForm />} />
					<Route path="/product/:id" element={<ProductDetail products={products} />} />
					<Route path="/order/payment-status/:orderId" element={<PaymentStatus />} />
					<Route path="/404" element={<PageNotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
				<Footer />
			</StyledApp>
		</BasketProvider>
	);
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 20px);
`