import React, { useState, useRef, useEffect } from 'react';
import { Main } from './layout/main/Main';
import { Catalog } from './layout/catalog/Catalog';
import { ProductType } from "../../store/useProducts";
import styled from 'styled-components';

type HomePageProps = {
	products: ProductType[];
};

export const HomePage = ({ products }: HomePageProps) => {
	const [showCatalog, setShowCatalog] = useState(false);
	const [hasClicked, setHasClicked] = useState(false); // Новое состояние
	const catalogRef = useRef<HTMLDivElement>(null);

	// Восстанавливаем состояние каталога из sessionStorage при монтировании
	useEffect(() => {
		const storedCatalogState = sessionStorage.getItem('showCatalog');
		if (storedCatalogState) {
			setShowCatalog(JSON.parse(storedCatalogState));
		}
	}, []);

	// Сохраняем состояние каталога в sessionStorage при его изменении
	useEffect(() => {
		sessionStorage.setItem('showCatalog', JSON.stringify(showCatalog));
	}, [showCatalog]);

	// Выполняем скролл и анимацию только при клике
	useEffect(() => {
		if (showCatalog && hasClicked) {
			// Запускаем анимацию и скролл с задержкой 500 мс
			const timer = setTimeout(() => {
				scrollToCatalog();
			}, 500);

			return () => clearTimeout(timer); // Очищаем таймер при размонтировании компонента
		}
	}, [showCatalog, hasClicked]);

	const handleClick = () => {
		setHasClicked(true); // Отмечаем, что был клик
		setShowCatalog(true); // Показываем каталог
	};

	const scrollToCatalog = () => {
		if (catalogRef.current) {
			catalogRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div>
			<Main setShowCatalog={handleClick} scrollToCatalog={scrollToCatalog} />
			{showCatalog && (
				<AnimatedCatalog ref={catalogRef}>
					<Catalog products={products} />
				</AnimatedCatalog>
			)}
		</div>
	);
};

// Styled-component для плавной анимации
const AnimatedCatalog = styled.div`
  opacity: 1;
  transform: translateY(0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

