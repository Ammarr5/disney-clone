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
				While Helen is called on to lead a campaign to bring back the Supers, Bob navigates the day-to-day heroics of “normal” life at home with Violet, Dash and Jack-Jack, whose superpowers are about to be discovered. Their mission is derailed, however, when a new villain emerges with a brilliant and dangerous plot that threatens everything. But with Frozone by their side, the Parrs can take on anything.
				</p>
			</DetailsContent>
		</DetailsWrapper>
	)
}

export default Details
