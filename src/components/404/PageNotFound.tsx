import * as React from 'react';
import styled from "styled-components";

export const PageNotFound = () => {
	return (
		<StyledPageNotFound>
			<p>404:PAGE NOT FOUND</p>
		</StyledPageNotFound>
	);
};

const StyledPageNotFound = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-size: 50px;
	}
`