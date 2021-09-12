import React from 'react'
import { 
	DetailsWrapper, 
	DetailsContent, 
	ButtonsRow,
	PlayButton,
	TrailerButton,
	AddButton,
	GroupButton
} from './Details.styles'

const Details = () => {
	return (
		<DetailsWrapper>
			<DetailsContent>
				<img src="/images/shang chi logo.png" alt="Shang Chi Logo" />
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
				2018 • 1h 58m • Science Fiction, Family, Animation, Action-Adventure
				</p>
				<p className="showDescription" >
					Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.
				</p>
			</DetailsContent>
		</DetailsWrapper>
	)
}

export default Details
