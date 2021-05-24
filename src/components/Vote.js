import React, { useState, useEffect } from 'react';
import CallToAction from './CallToAction';
import { api_key } from '../api';

// component styles
import './Main.css';

const apiKey = api_key;
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
			<div className="action">
				<CallToAction />
			</div>
			<img src={catAvatar} />
			<button onClick={getRandomcat}>next</button>
		</div>
	);
}

export default Vote;
