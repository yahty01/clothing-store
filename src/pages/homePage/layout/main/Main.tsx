// @flow
import * as React from 'react';
import styled from "styled-components";
import {StoreDescription} from "./store-description/StoreDescription";

type MainProps = {

};
export const Main = (props: MainProps) => {
	return (
		<StyledMainDiv>
			<PhotoWrapper><p>Тут будет фотка</p></PhotoWrapper>
			<StoreDescription/>
		</StyledMainDiv>
	);
};

const PhotoWrapper = styled.div`
  height: 530px;
  background-color: rgba(0, 0, 0, 0.16);
	display: flex;
	justify-content: center;
	align-items: center;
`

const StyledMainDiv = styled.div`
	display: flex;
	flex-direction: column;
  min-height: 1082px;
  outline: 1px solid red;
	margin-bottom: 30px;
`