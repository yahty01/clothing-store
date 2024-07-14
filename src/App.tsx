import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Basket} from "./pages/basket/Basket";
import {HomePage} from "./pages/homePage/HomePage";
import {Navigation} from "./components/navigator/Navigator";
import Photo from "./assets/images/cotalogMainPhoto.jpg"


export type ProductType = {
	id: number;
	imageUrl: string;
	title: string;
};

export type ProductsType = ProductType[];

const products: ProductsType = [
	{id: 1, imageUrl: Photo, title: 'Item 1'},
	{id: 2, imageUrl: Photo, title: 'Item 2'},
	{id: 3, imageUrl: Photo, title: 'Item 3'},
	{id: 4, imageUrl: Photo, title: 'Item 3'},
]

function App() {

	return (
		<div className="App">
			<Navigation/>
			<Routes>
				<Route path="/" element={<HomePage products={products}/>}/>
				<Route path="/Basket" element={<Basket/>}/>
				<Route path="/404" element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
				<Route path="*" element={<Navigate to="/404"/>}/>
			</Routes>
		</div>
	);
}

export default App;
