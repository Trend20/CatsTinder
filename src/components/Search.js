import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import { api_key } from '../api';

import './Main.css';

const apiKey = api_key;
const apiURL = 'https://api.thecatapi.com/v1/images/search?limit=100&page=100&order=DESC';

function Search() {
	const [catImages, setCatImages] = useState([]);
	useEffect(() => {
		getCatImages();
	}, []);

	const getCatImages = () => {
		fetch(apiURL, {
			headers: {
				'x-api-key': apiKey,
			},
		})
			.then((response) => response.json())
			.then((catImages) => {
				setCatImages(catImages);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="images" style={imagesStyles}>
			{catImages.map((image) => {
				return (
					<div className="image-container" style={containerStyle}>
						<img src={image.url} key={image.id} style={imgStyle} />
						<button style={btnStyle}>
							<i style={iconStyle}>
								<FaHeart />
							</i>
						</button>
					</div>
				);
			})}
		</div>
	);
}

const imagesStyles = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 2fr)',
	gridGap: '20px',
	padding: ' 70px 20px',
	marginTop: '50px',
	width: '100%',
};

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	width: '100%',
};

const imgStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	maxWidth: '300px',
	maxHeight: '400px',
};

const btnStyle = {
	padding: '20px',
	outline: 'none',
	cursor: 'pointer',
	fontSize: '1.5rem',
	border: 'none',
};

const iconStyle = {
	color: 'red',
};

export default Search;
