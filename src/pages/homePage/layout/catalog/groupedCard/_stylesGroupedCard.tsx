import styled from "styled-components";

export const GroupedCardContainer = styled.div`
	width: 857px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  //width: fit-content;
  cursor: pointer;
`;
export const MainImage = styled.img`
  //width: 422px;
  //height: 638px;
  object-fit: cover;
  object-position: center;
`;
export const GroupedCardTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h3`
  font-family: "Fira Mono", monospace;
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }

  margin: 16px 0;
`;
