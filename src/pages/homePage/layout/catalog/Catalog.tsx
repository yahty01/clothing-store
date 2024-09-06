import * as React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../../../store/useProducts';

type CatalogProps = {
  products: ProductType[];
};

export const Catalog = ({ products }: CatalogProps) => {
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  return (
    <StyledCatalog>
      {products.map(item => (
        <Card key={item.id} onClick={() => handleCardClick(item.id)}>
          <Image src={item.imgUrl} alt={item.title} />
          <Title>{item.title} →</Title>
        </Card>
      ))}
    </StyledCatalog>
  );
};

const StyledCatalog = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  width: 300px;
  cursor: pointer;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 10px 0;
`;