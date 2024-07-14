// @flow
import * as React from 'react';
import styled from "styled-components";
import {Main} from "./layout/main/Main";
import {Catalog} from "./layout/catalog/Catalog";
import {Footer} from "../../components/footer/Footer";

type HomePageProps = {

};

export const HomePage = (props: HomePageProps) => {
	return (
		<StyledMainDiv>
			<Main />
			<Catalog />
			<Footer/>
		</StyledMainDiv>
	);
};

const StyledMainDiv = styled.div`
	& > div {outline: orangered 1px solid;}
`