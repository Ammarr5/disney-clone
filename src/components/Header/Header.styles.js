import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	background-color: var(--darkBlue);
	/* height: 100px; */
	padding: .4rem 1rem;
	color: white;
	display: flex;
	align-items: center;
`;

export const HeaderLogo = styled.img`
	width: 80px;
`;

export const HeaderNav = styled.nav`
	display: flex;
	align-items: center;
	margin-left: 2.5rem;
	flex: 1;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: .8rem;
	a{
		display: flex;
		align-items: center;
		margin-right: 1rem;
		img{
			margin-right: 8px;
			height: 18px;
		}
		span{
			position: relative;
			&::before{
				content: '';
				width: 100%;
				height: 2px;
				background-color: white;
				position: absolute;
				bottom: -8px;
				left: 0;
				transform: scaleX(0);
				transform-origin: left center;
				opacity: 0;
				transition: all .2s cubic-bezier(.25,.45,.45,.75);
			}
			&:hover{
				::before{
					opacity: 1;
					transform: scaleX(1);
				}
			}
		}
	}
`;

export const HeaderProfile = styled.a`
	width: 60px;
	height: 60px;
	border-radius: 50%;
`;

export const HaderProfileImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`;