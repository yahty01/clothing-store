// HomePage.tsx
import * as React from 'react';
import styled from 'styled-components';
import {Main} from './layout/main/Main';
import {Catalog} from './layout/catalog/Catalog';
	import {ProductType} from "../../App";

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
