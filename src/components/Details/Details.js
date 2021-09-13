import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import {
	DetailsWrapper,
	DetailsContent,
	ButtonsRow,
	PlayButton,
	TrailerButton,
	AddButton,
	GroupButton
} from './Details.styles'
import db from '../../firebase'

const Details = () => {
	const [movie, setMovie] = useState({});
	const {id} = useParams();
	useEffect( () => {
		db.collection('movies').doc(id).get()
		.then( (doc) => {
			setMovie(doc.data())
		} )
	}, [id] )
	return (
		<DetailsWrapper posterImage={movie.posterImage}>
			<DetailsContent>
				<img src={movie?.logo} alt={`${movie.title} Logo`} />
				<ButtonsRow>
					<PlayButton>
						<div className="imageContainer" ><img src="/images/play-solid-black.svg" alt="play" /></div>
						play
					</PlayButton>
					<TrailerButton>
						<div className="imageContainer" ><img src="/images/play-solid-white.svg" alt="trailer" /></div>
						trailer
					</TrailerButton>
					<AddButton>
						<div className="imageContainer" ><img src="/images/plus-solid.svg" alt="add" /></div>
					</AddButton>
					<GroupButton>
						<div className="imageContainer" ><img src="/images/users-solid.svg" alt="add" /></div>
					</GroupButton>
				</ButtonsRow>
				<p className="subText" >
					{movie.metaData}
				</p>
				<p className="showDescription" >
					{movie.overview}
				</p>
			</DetailsContent>
		</DetailsWrapper>
	)
}

export default Details
