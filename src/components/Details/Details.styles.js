import styled from 'styled-components';

export const DetailsWrapper = styled.div`
	min-height: calc(100vh - 72.8px);
	background: linear-gradient(to right, #242638, #24263850), url('images/shang chi cover.jpg');
	background-position: center;
	background-size: cover;
	position: relative;
	top: 72.8px;
	display: flex;
	align-items: flex-end;
`;

export const DetailsContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2rem 3rem;
	max-width: 1000px;
	img{
		width: 25vw;
	}
	.subText{
		margin: 1rem 0;
		font-size: .8rem
	}
	.showDescription{
		font-size: 1.2rem;
	}
`;

export const ButtonsRow = styled.div`
	display: flex;
	/* background: blue; */
	button{
		margin-right: 1rem;
	}
`;

const ActionButton = styled.button`
	height: 50px;
	cursor: pointer;
	border: none;
	outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	text-transform: uppercase;
	padding: 0 2rem;
	border-radius: 7px;
	letter-spacing: .1rem;
	.imageContainer{
		width: 20px;
		height: 20px;
		margin-right: .4rem;
	}
	img{
		width: 100%;
		object-fit: cover;
	}
`;

export const PlayButton = styled(ActionButton)`
	background: white;
	color: black;
`;

export const TrailerButton = styled(ActionButton)`
	background: rgb(10 10 10 / .3);
	border: 2px solid white;
	color: white;
`;

export const AddButton = styled(ActionButton)`
	border-radius: 50%;
	border: 2px solid white;
	background: rgb(10 10 10 / .3);
	padding: unset;
	width: 50px;
	height: 50px;
	.imageContainer{
		margin: 0;
	}
`;

export const GroupButton = styled(ActionButton)`
	border-radius: 50%;
	border: 2px solid white;
	background: rgb(10 10 10 / .3);
	padding: unset;
	width: 50px;
	height: 50px;
	.imageContainer{
		margin: 0;
	}
`;

