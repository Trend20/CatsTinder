import React, { useState, useEffect } from 'react';

// component styles
import './Main.css';

const apiKey = '73eedd65-45da-425d-849f-f79256229f3e';
const myURL = 'https://api.thecatapi.com/v1/images/search';

function Vote() {
	// manage cat state
	const [catAvatar, setCatAvatar] = useState('');

	// manage the state rendering using useEffect
	useEffect(() => {
		getRandomcat();
	}, []);
	// function for getting random cats
	const getRandomcat = () => {
		// fetching our cat data
		fetch(myURL, {
			headers: {
				'x-api-key': apiKey,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const catAvatar = data[0].url;

				setCatAvatar(catAvatar);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="cats">
			<img src={catAvatar} />
			<button onClick={getRandomcat}>next</button>
		</div>
	);
}

export default Vote;
