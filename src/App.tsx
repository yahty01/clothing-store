import React, {useEffect, useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {Basket} from './pages/basket/Basket';
import {HomePage} from './pages/homePage/HomePage';
import {Navigation} from './components/navigator/Navigator';
import ProductDetail from "./pages/productDetail/ProductDetail";
import {PageNotFound} from "./components/404/PageNotFound";
import {Footer} from "./components/footer/Footer";
import {BasketProvider} from './pages/basket/BasketContext';
import styled from "styled-components";
import OrderForm from "./pages/orderForm/OrderForm";
import PaymentStatus from "./pages/paymentStatus/PaymentStatus";
import useProducts, {ProductType} from "./store/useProducts";
import {carset, jacket, platye, rubashka, yoobka} from "./assets/images/testingImage/forInportPhotos";
import Loading from "./pages/ loading/Loading";

function App() {
	const [products, setProducts] = useProducts();  // Хук для работы с продуктами
	const [loading, setLoading] = useState(true);   // Индикатор загрузки
	const [error, setError] = useState('');         // Переменная для хранения ошибки

	// Начальные данные для продукта
	const initialProducts: ProductType[] = [
		{
			id: '1',
			title: "Жакет",
			compound: "65% хб/ 30% ПОЛИЭСТЕР/5% ВИСКОЗА",
			price: 8500.00,
			imgUrl: jacket,
			sizes: ["S", "M"],
			size_s_quantity: 3,
			size_m_quantity: 2,
			size_c_quantity: 0
		},
		{
			id: '2',
			title: "Корсет White Swan",
			compound: "ШЕЛК",
			price: 5900.00,
			imgUrl: carset,
			sizes: ["S", "M"],
			size_s_quantity: 4,
			size_m_quantity: 0,
			size_c_quantity: 0
		},
		{
			id: '3',
			title: "Рубашка",
			compound: "БАТИСТ",
			price: 3900.00,
			imgUrl: rubashka,
			sizes: ["C"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 3
		},
		{
			id: '4',
			title: "Юбка",
			compound: "БАТИСТ",
			price: 2990.00,
			imgUrl: yoobka,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 2,
			size_c_quantity: 0
		},
		{
			id: '5',
			title: "Платье Dream dress",
			compound: "ПОЛИЭСТЕР/ВИСКОЗА/ШЕЛК",
			price: 14900.00,
			imgUrl: platye,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 0
		}, {
			id: '6',
			title: "Платье Dream dress",
			compound: "ПОЛИЭСТЕР/ВИСКОЗА/ШЕЛК",
			price: 14900.00,
			imgUrl: platye,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 0
		}, {
			id: '7',
			title: "Платье Dream dress",
			compound: "ПОЛИЭСТЕР/ВИСКОЗА/ШЕЛК",
			price: 14900.00,
			imgUrl: platye,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 0
		}, {
			id: '8',
			title: "Платье Dream dress",
			compound: "ПОЛИЭСТЕР/ВИСКОЗА/ШЕЛК",
			price: 14900.00,
			imgUrl: platye,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 0
		}, {
			id: '9',
			title: "Платье Dream dress",
			compound: "ПОЛИЭСТЕР/ВИСКОЗА/ШЕЛК",
			price: 14900.00,
			imgUrl: platye,
			sizes: ["S", "M"],
			size_s_quantity: 0,
			size_m_quantity: 0,
			size_c_quantity: 0
		}
	];

	// Эффект для загрузки данных
	useEffect(() => {
		async function fetchProducts() {
			try {
				const response = await fetch('https://vyacheslavna.ru/products.php'); // Ошибочный URL для тестирования ошибки верный - https://vyacheslavna.ru/products.php
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data: ProductType[] = await response.json();
				setProducts(data);  // Устанавливаем данные продуктов с сервера
			} catch (e) {
				if (e instanceof Error) {
					setError(e.message);
					// Выводим сообщение об ошибке
					// alert(`Error fetching products: ${e.message}`);
				} else {
					setError('An unexpected error occurred');
					alert('An unexpected error occurred');
				}
				// В случае ошибки устанавливаем начальные данные
				setProducts(initialProducts);
			} finally {
				setLoading(false);
			}
		}

		fetchProducts();
	}, []);

	const AppRender = () => {
		return (<BasketProvider>
				<StyledApp className="App">
					<Navigation/>
					<Routes>
						<Route path="/" element={<HomePage products={products}/>}/>
						<Route path="/basket" element={<Basket/>}/>
						<Route path="/order" element={<OrderForm/>}/>
						<Route path="/product/:id" element={<ProductDetail products={products}/>}/>
						<Route path="/order/payment-status/:orderId" element={<PaymentStatus/>}/>
						<Route path="/404" element={<PageNotFound/>}/>
						<Route path="*" element={<Navigate to="/404"/>}/>
					</Routes>
					<Footer/>
				</StyledApp>
			</BasketProvider>
		)
	}

	// Отображение загрузки
	if (loading) {
		return (
			<BasketProvider>
				<StyledApp>
					<Navigation/>
					<Loading/>
				</StyledApp>
			</BasketProvider>
		)
	}

	// Временное решения для локального тестирования
	if (error) {
		return (
			<>
				<AppRender/>
				<ErrorP>Режим ошибки</ErrorP>
			</>
		);
	}

	return <AppRender/>
}

export default App;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 20px);
`;

const ErrorP = styled.p`
	background-color: orange;
  color: red;
  z-index: 9;
  font-size: 50px;
  font-weight: 800;
  opacity: 0.4;
  font-family: "Fira Mono", monospace;
`