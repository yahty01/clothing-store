// @flow
import * as React from 'react';
import styled from "styled-components";
import {StoreDescription} from "./store-description/StoreDescription";

type MainProps = {

};
export const Main = (props: MainProps) => {
	return (
		<StyledMain>
			<PhotoWrapper><p>Тут будет фотка</p></PhotoWrapper>
			<StoreDescription/>
		</StyledMain>
	);
};

const PhotoWrapper = styled.div`
  height: 530px;
  background-color: rgba(0, 0, 0, 0.16);
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledMain = styled.section`
	display: flex;
	flex-direction: column;
  min-height: 1082px;
`