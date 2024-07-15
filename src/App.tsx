import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Basket} from "./pages/basket/Basket";
import {HomePage} from "./pages/homePage/HomePage";
import {Navigation} from "./components/navigator/Navigator";
import jacket from "./assets/images/jacket.jpg"
import corset from "./assets/images/corset.svg"
import bigPhoto from "./assets/images/bigphoto.jpg"
import dress from "./assets/images/dress.jpg"
import {v1} from "uuid";


export type ProductType = {
	id: string;
	imageUrl: string;
	title: string;
};

export type ProductsType = ProductType[];

const products: ProductsType = [
	{id: v1(), imageUrl: jacket, title: 'Жакет →'},
	{id: v1(), imageUrl: corset, title: 'Корсет White Swan →'},
	{id: v1(), imageUrl: bigPhoto, title: 'Batist set'},
	{id: v1(), imageUrl: dress, title: 'Платье Dream dress →'},
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
