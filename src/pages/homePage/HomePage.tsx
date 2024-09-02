// HomePage.tsx
import * as React from 'react';
import {Main} from './layout/main/Main';
import {Catalog} from './layout/catalog/Catalog';
import {ProductType} from "../../store/useProducts";

type HomePageProps = {
	products: ProductType[]
}

export const HomePage = ({products}: HomePageProps) => {
	return (
		<div>
			<Main/>
			<Catalog products={products}/>
		</div>
	);
};
