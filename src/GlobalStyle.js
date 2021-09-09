import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	:root{
		--darkBlue: #090b13;
	}

	*, *::before, *::after{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	a, a:visited{
		color: inherit;
		text-decoration: inherit;
	}

	body{
		font-family: 'Noto Sans', sans-serif;
		color: white;
	}
`;