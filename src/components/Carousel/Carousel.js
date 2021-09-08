import React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		arrows: true,
		// slidesToShow: 1,
		// slidesToScroll: 1
	}
	return (
		<CarouselWrapper {...settings}>
			<SlideImage>
				<img src="/images/slider-badag.jpg" alt="Movie Cover" />
			</SlideImage>
			<SlideImage>
				<img src="/images/slider-badging.jpg" alt="Movie Cover" />
			</SlideImage>
			<SlideImage>
				<img src="/images/slider-scale.jpg" alt="Movie Cover" />
			</SlideImage>
			<SlideImage>
				<img src="/images/slider-scales.jpg" alt="Movie Cover" />
			</SlideImage>
		</CarouselWrapper>
	)
}

export default Carousel;

const CarouselWrapper = styled(Slider)`
	width: 90%;
	margin: 0 auto;
	/* margin-top: 1rem; */
	/* overflow: hidden; */
	.slick-list{
		overflow: visible;
	}
	.slick-dots{
		position: absolute;
		bottom: 1rem;
		right: 2rem;
		width: fit-content;
		z-index: 4;
		li {
			button:before{
				color: #A0A0A0;
				font-size: .7rem;
				opacity: .85;
			}
		}
		li.slick-active{
			button:before{
				color: white !important;
			}
		}
	}
	.slick-arrow{
		display: none !important;
	}
	img{
		width: 100%;
		border: 5px solid transparent;
		box-shadow: rgb(0 0 0 / 69%) 0 30px 30px -10px, rgb(0 0 0 / 72%) 0 16px 10px -10px;
		border-radius: 5px;
		transition: border .2s;
		cursor: pointer;
		:hover{
			border: 5px solid white;
		}
	}
`;
const SlideImage = styled.div`

`;
