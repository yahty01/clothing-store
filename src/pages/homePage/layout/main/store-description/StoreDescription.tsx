import React from 'react';
import Photo from "../../../../../assets/images/catalogmain_photo.jpg";
import {
	FirstBigDiv, FourTextDiv,
	OneTextDiv,
	PhotoDescription,
	SecondBigDiv,
	StyledMainDiv,
	StyledMainGrid, ThreeTextDiv, TwoTextDiv
} from "./_stylesDescription";

type StoreDescriptionProps = {
	setShowCatalog: (value: boolean) => void;
	scrollToCatalog: () => void;
};

export const StoreDescription = ({ setShowCatalog, scrollToCatalog }: StoreDescriptionProps) => {
	const handleCatalogClick = () => {
		scrollToCatalog(); // Выполняем прокрутку сразу после открытия каталога
		setShowCatalog(true);
	};

	return (
		<StyledMainDiv>
			<StyledMainGrid>
				<FirstBigDiv>
					<OneTextDiv style={{ alignItems: "flex-start" }}>
						<p>VYACHESLÁVNA начинает свое путешествие, вкладывая в каждый шов и каждый паттерн бесценные частицы творчества</p>
					</OneTextDiv>
					<TwoTextDiv>
						<p>как распускающийся бутон редкого цветка, медленно и уверенно раскрывающий свое великолепие</p>
					</TwoTextDiv>
				</FirstBigDiv>

				<SecondBigDiv>
					<ThreeTextDiv>
						<PhotoDescription>
							<a onClick={handleCatalogClick}>К каталогу →</a>
							<img src={Photo} alt="#" />
						</PhotoDescription>
					</ThreeTextDiv>
					<FourTextDiv>
						<p>Каждое изделие — воплощение женственности, капля изысканности, которую можно почувствовать, дотронувшись до ткани</p>
					</FourTextDiv>
				</SecondBigDiv>
			</StyledMainGrid>
		</StyledMainDiv>
	);
};
