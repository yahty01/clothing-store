import { useState } from 'react';

export type ProductType = {
  id: string;
  title: string;
  compound: string;
  price: number;
  imgUrl: string;
  sizes: string[];
  size_s_quantity: number;
  size_m_quantity: number;
  size_c_quantity: number;
  sizeSelect?: string;
};

const useProducts = (): [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>] => {
  const [products, setProducts] = useState<ProductType[]>([]);

  return [products, setProducts];
};

export default useProducts;