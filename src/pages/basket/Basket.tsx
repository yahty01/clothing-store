// @flow
import * as React from 'react';
import styled from "styled-components";

type Props = {

};
export const Basket = (props: Props) => {
	return (
		<StyledBasket>
			<div>i`m basket</div>
		</StyledBasket>
	);
};

const StyledBasket = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 100px;
`