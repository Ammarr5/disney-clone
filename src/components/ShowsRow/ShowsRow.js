import React from 'react';
import { RowWrapper, RowSlider, Show as ShowStyled } from './ShowsRow.styles';
import {
	Link
} from 'react-router-dom';

const Show = ({image, alt}) => {
	return(
		<ShowStyled>
			<img src={image} alt={alt} />
		</ShowStyled>
	)
}

const ShowsRow = ({label, movies}) => {
	const settings = {
		dots: false,
		speed: 500,
		infinite: true,
		centerMode: true,
		// centerPadding: '10rem',
		slidesToShow: 4,
		slidesPerPage: 4,
		responsive:[
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			}
		]
	}
	return (
		<RowWrapper>
			<h2> {label} </h2>
			<RowSlider {...settings} >
				{movies.map(movie => {
					return(
						<Link to={`/details/${movie.id}`} key={movie.id}>
							<Show image={movie.cardImage} alt={movie.title}/>
						</Link>
					)
				})}
			</RowSlider>
		</RowWrapper>
	)
}

export default ShowsRow;
