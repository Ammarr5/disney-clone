import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';
import ShowsRow from './ShowsRow/ShowsRow';

const Home = () => {
	return (
		<HomeWrapper>
			<Carousel />
			<Categories />
			<ShowsRow label="Recommended for you" />
			<ShowsRow label="New to disney+" />
			<ShowsRow label="originals" />
			<ShowsRow label="trending" />
		</HomeWrapper>
	)
}

export default Home;

const HomeWrapper = styled.main`
	
	top: 72.8px;
	min-height: calc(100vh - 72.8px);
	padding: 1rem calc(3.5vw - 5px);
	position: relative;
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
		z-index: -1;
	}
`;
