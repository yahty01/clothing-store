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
	const [isAnimating, setIsAnimating] = useState(false); // Состояние анимации для плавного появления
	const catalogRef = useRef<HTMLDivElement>(null);

	// Восстанавливаем состояние из sessionStorage при монтировании
	useEffect(() => {
		const storedCatalogState = sessionStorage.getItem('showCatalog');
		if (storedCatalogState) {
			setShowCatalog(JSON.parse(storedCatalogState));
		}
	}, []);

	// Сохраняем состояние в sessionStorage при его изменении
	useEffect(() => {
		sessionStorage.setItem('showCatalog', JSON.stringify(showCatalog));
	}, [showCatalog]);

	const scrollToCatalog = () => {
		if (catalogRef.current) {
			catalogRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		if (showCatalog) {
			setIsAnimating(true); // Начинаем анимацию
			setTimeout(() => {
				scrollToCatalog(); // Прокрутка через 500 мс
			}, 500);
		}
	}, [showCatalog]);

	return (
		<div>
			<Main setShowCatalog={setShowCatalog} scrollToCatalog={scrollToCatalog} />
			{showCatalog && (
				<AnimatedCatalog ref={catalogRef} isAnimating={isAnimating}>
					<Catalog products={products} />
				</AnimatedCatalog>
			)}
		</div>
	);
};

// Styled-component для плавной анимации
const AnimatedCatalog = styled.div<{ isAnimating: boolean }>`
  opacity: ${({ isAnimating }) => (isAnimating ? 1 : 0)};
  transform: ${({ isAnimating }) => (isAnimating ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.5s ease, transform 0.5s ease;
`;
