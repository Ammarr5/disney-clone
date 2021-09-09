import React from 'react';
import { RowWrapper, RowSlider, Show as ShowStyled } from './ShowsRow.styles';

const Show = ({image, alt}) => {
	return(
		<ShowStyled>
			<img src={image} alt={alt} />
		</ShowStyled>
	)
}

const ShowsRow = ({label}) => {
	const settings = {
		dots: false,
		speed: 500,
		infinite: true,
		centerMode: true,
		// centerPadding: '10rem',
		slidesToShow: 4,
		slidesPerPage: 4,
	}
	return (
		<RowWrapper>
			<h2> {label} </h2>
			<RowSlider {...settings} >
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
				<Show image="images/shang-chi.jpg" alt="Shang Chi"/>
			</RowSlider>
		</RowWrapper>
	)
}

export default ShowsRow;
