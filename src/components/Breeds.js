import React, { useState, useEffect } from 'react';
import { api_key } from '../api';

import './Main.css';

const apiKey = api_key;
const apiURL = 'https://api.thecatapi.com/v1/breeds';

function Breeds() {
	const [catBreeds, setCatBreeds] = useState([]);

	useEffect(() => {
		getCatBreeds();
	}, []);

	const getCatBreeds = () => {
		fetch(apiURL, {
			headers: {
				'x-api-key': apiKey,
			},
		})
			.then((response) => response.json())
			.then((catBreeds) => {
				setCatBreeds(catBreeds);
				console.log(catBreeds);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="breeds">
			{catBreeds.map((breed) => {
				return (
					<a key={breed.id} href={breed.cfa_url}>
						<div className="breed-container">
							<h3>{breed.name}</h3>
							<h6>id:{breed.id}</h6>
							<p>{breed.description}</p>
							<p>{breed.temperament}</p>
						</div>
					</a>
				);
			})}
		</div>
	);
}

export default Breeds;
