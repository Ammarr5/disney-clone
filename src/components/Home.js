import React, { useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel/Carousel';
import Categories from './Categories/Categories';
import ShowsRow from './ShowsRow/ShowsRow';
import { updateMovies, selectMovies } from '../features/movies/moviesSlice';
import { useDispatch } from 'react-redux';
import db from '../firebase';
import { useSelector } from 'react-redux';
import bgImage from '../images/home-background.png'

const Home = () => {
	const dispatch = useDispatch();
	const movies = useSelector(selectMovies);
	console.log(movies)

	useEffect( () => {
		db.collection('movies').onSnapshot( snapshot => {
			let movies = snapshot.docs.map( doc => ({...doc.data(), id: doc.id}) )
			dispatch(updateMovies(movies));
		} )
	}, [dispatch] )

	return (
		<HomeWrapper image={bgImage}>
			<Carousel />
			<Categories />
			<ShowsRow label="Recommended for you" movies={movies} />
			<ShowsRow label="New to disney+" movies={movies} />
			<ShowsRow label="originals" movies={movies} />
			<ShowsRow label="trending" movies={movies} />
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
		background-image: url(${({image}) => image});
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
