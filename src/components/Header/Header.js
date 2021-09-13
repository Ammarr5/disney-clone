import React from 'react';
import { HeaderWrapper, HeaderLogo, HeaderNav, HeaderProfile, HaderProfileImage } from './Header.styles';
import {
	Link
} from 'react-router-dom';

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to="/" >
				<HeaderLogo src="/images/logo.svg" />
			</Link>
			<HeaderNav>
				<Link to="/" > <img src="/images/home-solid.svg" alt="home" /> <span>home</span> </Link>
				<Link to="/" > <img src="/images/search-solid.svg" alt="home" /> <span>search</span> </Link>
				<Link to="/" > <img src="/images/plus-solid.svg" alt="home" /> <span>watchlist</span> </Link>
				<Link to="/" > <img src="/images/star-solid.svg" alt="home" /> <span>originals</span> </Link>
				<Link to="/" > <img src="/images/film-solid.svg" alt="home" /> <span>movies</span> </Link>
				<Link to="/" > <img src="/images/series-solid.svg" alt="home" /> <span>series</span> </Link>
			</HeaderNav>
			<HeaderProfile href="#">
				<HaderProfileImage src="/images/profile-pic.jpeg" alt="User's picture" />
			</HeaderProfile>
		</HeaderWrapper>
	)
}

export default Header;
