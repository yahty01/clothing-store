// @flow 
import * as React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/theme";

const media = {
	inst: 'instagram',
	tg: 'telegram'
}

type Props = {
	
};

export const Footer = (props: Props) => {

	return (
		<StyledFooter>
			<div>
				<SocialMedia>
					<span>{media.inst.toUpperCase()} </span>
					<span>{media.tg.toUpperCase()}</span>
				</SocialMedia>
				<small>© 2023 VYACHESLÁVNA BRAND</small>
			</div>

		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 500;
  line-height: 1.5;
  padding-top: 92px;
	padding-bottom: 38px;
  min-height: 153px;
	display: flex;
	justify-content: center;
  & > div {
	  display: flex;
	  justify-content: space-around;
    width: 92.6%;
    border-bottom: 0.5px solid ${theme.secondaryTextColor};
  }
	
	small {
		display: inline-block;
		width: fit-content;
	}
`

const SocialMedia = styled.div`
	width: fit-content;
`