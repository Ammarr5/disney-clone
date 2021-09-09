import styled from "styled-components";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const RowWrapper = styled.div`
	margin: 4rem 0;
	h2{
		text-transform: capitalize;
		margin-bottom: 1rem;
		font-size: 1.3rem;
	}
`;

export const RowSlider = styled(Slider)`
	.slick-arrow{
		z-index: 3;
	}
	.slick-list{
		overflow: unset;
		.slick-slide{
			padding: 0 1rem;
		}
	}
`;

export const Show = styled.div`
	width: 100%;
	height: 10rem;
	cursor: pointer;
	border: 3px solid rgb(255 255 255 / .1);
	border-radius: 10px;
	overflow: hidden;
	box-shadow: rgb(0 0 0 / 69%) 0 30px 30px -10px, rgb(0 0 0 / 72%) 0 16px 10px -10px;
	transition: all .25s cubic-bezier(.25,.45,.45,.75);
	img{
		width: 100%;
		object-fit: cover;
	}
	:hover{
		transform: scale(1.05);
		border-color: rgb(255 255 255 / .8);
		box-shadow: rgb(0 0 0 / 69%) 0 25px 20px -15px, rgb(0 0 0 / 72%) 0 10px 10px -15px;
	}
`;