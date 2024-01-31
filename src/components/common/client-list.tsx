import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ClientElem from "./client-elem";
import myResult from "../../assets/images/about-1.jpg";
import result1 from "../../assets/images/result-1.jpg";
import result2 from "../../assets/images/result-2.jpg";
import result3 from "../../assets/images/result-3.jpg";
import result4 from "../../assets/images/result-4.jpg";
import result5 from "../../assets/images/result-5.jpg";
import result6 from "../../assets/images/result-6.jpg";
import result7 from "../../assets/images/result-7.jpg";
import result8 from "../../assets/images/result-8.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { IResult } from "../../models/Result";

const ClientList: React.FC = () => {
	const results: IResult[] = [
		{
			initial: 105,
			month: 4,
			total: 32,
			img: myResult,
		},
		{
			initial: 101,
			month: 3,
			total: 30,
			img: result1,
		},
		{
			initial: 99,
			month: 1,
			total: 12,
			img: result7,
		},
		{
			initial: 68,
			month: 2,
			total: 14,
			img: result3,
		},
		{
			initial: 82,
			month: 1,
			total: 10,
			img: result4,
		},
		{
			initial: 141,
			month: 3,
			total: 28,
			img: result5,
		},
		{
			initial: 77,
			month: 2,
			total: 15,
			img: result8,
		},
		{
			initial: 96,
			month: 1,
			total: 13,
			img: result2,
		},
		{
			initial: 76,
			month: 1,
			total: 9,
			img: result6,
		},
	];

	return (
		<Swiper
			className="results__swiper"
			modules={[Navigation, Autoplay]}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			spaceBetween={20}
			loop={true}
			slidesPerView={1}
			onSlideChange={() => console.log()}
			onSwiper={() => console.log()}
			breakpoints={{
				1536: {
					slidesPerView: 3,
				},
				1280: {
					slidesPerView: 3,
				},
				1024: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 2,
				},
			}}
		>
			{results.map((item, idx) => (
				<SwiperSlide key={idx}>
					<ClientElem {...item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ClientList;
