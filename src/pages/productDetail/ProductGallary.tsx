import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode, Scrollbar } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Импорт стилей
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

interface ProductGalleryProps {
	images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

	return (
		<div style={{ display: 'flex', maxWidth: '800px', margin: '0 auto', height: '400px' }}>
			<div style={{ width: '300px', marginRight: '20px', position: 'relative' }}>
				<Swiper
					style={{ width: '100%', height: '100%' }}
					spaceBetween={10}
					navigation={false}
					thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
					modules={[Navigation, Thumbs, Scrollbar]}
					scrollbar={{
						hide: false,
						draggable: true,
					}}
					direction="vertical"
					className="mySwiper2"
				>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<img
								src={img}
								alt={`Product ${index + 1}`}
								style={{ width: '100%', height: '100%', objectFit: 'contain' }}
								onError={(e) => {
									console.error(`Error loading image: ${img}`);
									e.currentTarget.src = 'https://via.placeholder.com/400?text=Image+Not+Found';
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div style={{ width: '30%' }}>
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={3}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					direction="vertical"
					className="mySwiper"
					style={{ width: '100%', height: '100%' }}
				>
					{images.map((img, index) => (
						<SwiperSlide key={index} style={{ height: '120px' }}>
							<img
								src={img}
								alt={`Thumbnail ${index + 1}`}
								style={{ width: '100%', height: '100%', objectFit: 'cover' }}
								onError={(e) => {
									console.error(`Error loading thumbnail: ${img}`);
									e.currentTarget.src = 'https://via.placeholder.com/100?text=Thumb+Not+Found';
								}}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductGallery;