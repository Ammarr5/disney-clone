import styled from "styled-components";

export const CategoriesWrapper = styled.div`
	margin: 4rem auto;
	display: grid;
	grid-template-columns: repeat(5, minmax(0, 1fr));
	grid-gap: 2rem;
	@media only screen and (max-width: 700px){
		grid-template-columns: 1fr;
	}
`;

export const CategorieItem = styled.div`
	cursor: pointer;
	background-color: transparent;
	border: 3px solid rgb(255 255 255 / .1);
	border-radius: 10px;
	box-shadow: rgb(0 0 0 / 69%) 0 30px 30px -10px, rgb(0 0 0 / 72%) 0 16px 10px -10px;
	transition: all .25s cubic-bezier(.25,.45,.45,.75);
	position: relative;
	overflow: hidden;
	img{
		width: 100%;
		object-fit: cover;
	}
	video{
		display: none;
		position: absolute;
		inset: 0;
		object-fit: cover;
	}
	:hover{
		transform: scale(1.05);
		border-color: rgb(255 255 255 / .9);
		box-shadow: rgb(0 0 0 / 69%) 0 25px 20px -15px, rgb(0 0 0 / 72%) 0 10px 10px -15px;
		video{
			display: block;
		}
	}
`;