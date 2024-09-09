import { useState } from 'react';

export type ProductType = {
	id: string;           // Идентификатор продукта
	title: string;        // Название продукта
	compound: string;     // Состав продукта (материалы)
	price: number;        // Цена продукта
	imgUrl: string;       // URL изображения продукта
	sizes: string[];      // Доступные размеры
	size_s_quantity: number;  // Количество для размера S
	size_m_quantity: number;  // Количество для размера M
	size_c_quantity: number;  // Количество для размера C
	sizeSelect?: string
};

const useProducts = (): [ProductType[], React.Dispatch<React.SetStateAction<ProductType[]>>] => {


	const [products, setProducts] = useState<ProductType[]>([]);

	return [products, setProducts]; // Возвращаем initialProducts
};

export default useProducts;
