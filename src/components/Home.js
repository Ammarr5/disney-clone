import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';

const Home = () => {
	return (
		<HomeWrapper>
			<Carousel />
		</HomeWrapper>
	)
}

export default Home;

const HomeWrapper = styled.main`
	min-height: calc(100vh - 72.8px);
	position: relative;
	background-color: #171A1F;
	overflow-x: hidden;
	&:before{
		content: '';
		background-image: url('images/home-background.png');
		background-size: cover;
		background-attachment: fixed;
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
`;
