import React from 'react';
import { CategoriesWrapper, CategorieItem as Item } from './Categories.styles';

const CategorieItem = ({image, alt, video}) => {
	return(
		<Item>
			<img src={image} alt={alt} />
			<video autoPlay loop muted>
				<source src={video} />
			</video>
		</Item>
	)
}

const Categories = () => {
	return (
		<CategoriesWrapper>
			<CategorieItem image="/images/categories-disney.png" alt="Disney" video="/videos/disney.mp4" />
			<CategorieItem image="/images/categories-pixar.png" alt="pixar" video="/videos/pixar.mp4" />
			<CategorieItem image="/images/categories-marvel.png" alt="marvel" video="/videos/marvel.mp4" />
			<CategorieItem image="/images/categories-star-wars.png" alt="star wars" video="/videos/star-wars.mp4" />
			<CategorieItem image="/images/categories-national-geographic.png" alt="national geographic" video="/videos/national-geographic.mp4" />
		</CategoriesWrapper>
	)
}

export default Categories;
