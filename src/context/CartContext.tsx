// src/context/CartContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface CartContextType {
	cartItems: number;
	addToCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
	children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cartItems, setCartItems] = useState<number>(0);

	// Load cart items from localStorage on initial render
	useEffect(() => {
		const storedCartItems = localStorage.getItem('cartItems');
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems));
		}
	}, []);

	// Save cart items to localStorage whenever they change
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = () => {
		setCartItems(cartItems + 1);
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
};
