import React from 'react';
import styled from 'styled-components';

const Login = () => {
	return (
		<>
			<LoginHero>
				<LoginButton>Login</LoginButton>
				<CTAContent>
					<img src="/images/bundle-logo.svg" alt="bundle" className="bundleLogo" />
					<JoinButton> get the disney bundle </JoinButton>
					<p>Stream now. <span> <a href="#">Terms apply.</a> </span> </p>
					<img src="/images/disney-franchise-logos.png" alt="franchise" className="franchise" />
					<a href="#" className="disneyOnly" >Sign up for Disney+ only.</a>
				</CTAContent>
			</LoginHero>
		</>
	)
}

export default Login;

const LoginHero = styled.section`
	height: 100vh;
	background: url('/images/login-hero.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
	display: flex;
	justify-content: center;
	align-items: center;
	@media only screen and (max-width: 850px){
	background-image: url('/images/login-mobile-hero.jpg');
	}
`;

const LoginButton = styled.button`
	color: white;
	cursor: pointer;
	text-transform: uppercase;
	background: rgb(10 10 10 / .3);
	border: 2px solid white;
	border-radius: 5px;
	letter-spacing: .1rem;
	padding: .6rem 1.2rem;
	position: fixed;
	right: 2rem;
	top: 2rem;
	transition: all .2s ease;
	:hover{
		background: white;
		color: black
	}
`;

const CTAContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 750px;
	.bundleLogo{
		width: 90%
	}
	.franchise{
		width: 90%;
		margin-bottom: 1rem;
	}
	.disneyOnly{
		text-decoration: underline;
	}
	p{
		font-size: .7rem;
		color: #AFAFAF;
		margin-bottom: 1rem;
		span{
			color: white;
			margin-left: .5rem;
			text-decoration: underline;
		}
	}
	@media only screen and (max-width: 850px){
		width: 500px
	}
	@media only screen and (max-width: 550px){
		width: 80vw;
		button{
			font-size: .8rem;
			border-radius: 3px;
		}
	}
`;

const JoinButton = styled.button`
	width: 100%;
	padding: 1rem 0;
	margin: 1rem 0;
	cursor: pointer;
	font-size: 1.2rem;
	text-transform: uppercase;
	background-color: #0063e5;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
	letter-spacing: .1rem;
	transition: background .1s ease;
	:hover{
		background-color: #0483ee;
	}
`;