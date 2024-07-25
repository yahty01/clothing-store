import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Basket } from './pages/basket/Basket';
import { HomePage } from './pages/homePage/HomePage';
import { Navigation } from './components/navigator/Navigator';
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import ProductDetail from "./pages/homePage/layout/catalog/productDetail/ProductDetail";
import { PageNotFound } from "./components/404/PageNotFound";
import { Footer } from "./components/footer/Footer";
import { BasketProvider } from './components/BasketContext';
import OrderForm from "./pages/basket/OrderForm";

export type ProductType = {
	id: string;
	imgUrl: string;
	title: string;
	price: number;
	size: string;
	compound: string;
};

function App() {
	const [products, setProducts] = useState<ProductType[]>([]);

	useEffect(() => { // Данная Версия хука если в sessionStorage есть 'product', то берет данные от туда, а если нет то с fb
		let getProducts = sessionStorage.getItem('products'); //
		if (getProducts) {
			setProducts(JSON.parse(getProducts))
		} else {
			const fetchProducts = async () => {
				const productsCollection = collection(db, 'products');
				const productSnapshot = await getDocs(productsCollection);
				const productList = productSnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data()
				})) as ProductType[];
				setProducts(productList);
			}
			fetchProducts().catch(console.error);
		}
	}, []);

	// useEffect(() => {
	// 	const fetchProducts = async () => {
	// 		const productsCollection = collection(db, 'products');
	// 		const productSnapshot = await getDocs(productsCollection);
	// 		const productList = productSnapshot.docs.map(doc => ({
	// 			id: doc.id,
	// 			...doc.data()
	// 		})) as ProductType[];
	// 		setProducts(productList);
	// 	};
	//
	// 	fetchProducts().catch(console.error);
	// }, []); Данную версию хука пока оставим

	useEffect(() => {
		sessionStorage.setItem('products', JSON.stringify(products));
	}, );

	return (
		<BasketProvider>
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<HomePage products={products} />} />
					<Route path="/Basket" element={<Basket />} />
					<Route path="/order" element={<OrderForm />} /> {/* Новый маршрут */}
					<Route path="/product/:id" element={<ProductDetail products={products} />} />
					<Route path="/404" element={<PageNotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
				<Footer />
			</div>
		</BasketProvider>
	);
}

export default App;
