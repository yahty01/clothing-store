// src/pages/basket/Basket.tsx
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Basket: React.FC = () => {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		return null;
	}

	const { cartItems } = cartContext;

	return (
		<div>
			<h1>Basket</h1>
			<p>Items in cart: {cartItems}</p>
		</div>
	);
};

export default Basket;
