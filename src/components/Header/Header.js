import React from 'react';
import { HeaderWrapper, HeaderLogo, HeaderNav, HeaderProfile, HaderProfileImage } from './Header.styles';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderLogo src="/images/logo.svg" />
			<HeaderNav>
				<a href="#" > <img src="/images/home-solid.svg" alt="home" /> <span>home</span> </a>
				<a href="#" > <img src="/images/search-solid.svg" alt="home" /> <span>search</span> </a>
				<a href="#" > <img src="/images/plus-solid.svg" alt="home" /> <span>watchlist</span> </a>
				<a href="#" > <img src="/images/star-solid.svg" alt="home" /> <span>originals</span> </a>
				<a href="#" > <img src="/images/film-solid.svg" alt="home" /> <span>movies</span> </a>
				<a href="#" > <img src="/images/series-solid.svg" alt="home" /> <span>series</span> </a>
			</HeaderNav>
			<HeaderProfile href="#">
				<HaderProfileImage src="/images/profile-pic.jpeg" alt="User's picture" />
			</HeaderProfile>
		</HeaderWrapper>
	)
}

export default Header;
