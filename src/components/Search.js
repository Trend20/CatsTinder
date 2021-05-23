import React, { useState, useEffect } from 'react';

import './Main.css';

const apiKey = '73eedd65-45da-425d-849f-f79256229f3e';
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
				console.log(catImages);
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
						<img src={image.url} alt="" style={imgStyle} />
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
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 2fr)',
	width: '100%',
};

const imgStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, 1fr)',
	maxWidth: '300px',
	maxHeight: '400px',
};

export default Search;
