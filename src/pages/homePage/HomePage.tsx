// HomePage.tsx
import * as React from 'react';
import styled from 'styled-components';
import { Main } from './layout/main/Main';
import { Catalog } from './layout/catalog/Catalog';
import { Footer } from '../../components/footer/Footer';

export const HomePage = () => {
	return (
		<StyledMainDiv>
			<Main />
			<Catalog />
			<Footer />
		</StyledMainDiv>
	);
};

const StyledMainDiv = styled.div`
  & > section {
    outline: orangered 1px solid;
  }
`;