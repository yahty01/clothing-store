// src/components/navigator/navigator.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Navigation: React.FC = () => {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		return null;
	}

	const { cartItems } = cartContext;

	return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/basket">Basket ({cartItems})</Link>
		</nav>
	);
};

export default Navigation;
