// src/pages/homePage/HomePage.tsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const HomePage: React.FC = () => {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		return null;
	}

	const { addToCart } = cartContext;

	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={addToCart}>Add to Cart</button>
		</div>
	);
};

export default HomePage;
