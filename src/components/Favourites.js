import React, { Component } from 'react';

const apiURL = 'https://api.thecatapi.com/v1/favourites';

class Favourites extends Component {
	constructor(props) {
		super(props);

		this.state = {
			catFavourite: [],
		};
	}

	componentDidMount() {
		fetch(apiURL, {
			headers: {
				'x-api-key': '73eedd65-45da-425d-849f-f79256229f3e',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				this.setState({
					catFavourite: data,
				});
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return <div className="favourites"></div>;
	}
}

const favouritesStyle = {
	display: 'grid',
	padding: '70px 20px',
};

export default Favourites;

// USING FUNCTIONAL COMPONENT

// import React, { useState, useEffect } from 'react';

// const apiKey = '73eedd65-45da-425d-849f-f79256229f3e';
// const apiURL = 'https://api.thecatapi.com/v1/favourites';

// function Favourites() {
// 	// component state
// 	const [favourite, setFavourite] = useState([]);

// 	useEffect(() => {
// 		getFavourites();
// 	}, []);

// 	// get favourote cats function
// 	const getFavourites = () => {
// 		fetch(apiURL, {
// 			headers: {
// 				'x-api-key': apiKey,
// 			},
// 		})
// 			.then((res) => res.json())
// 			.then((data) => {
// 				setFavourite(data);
// 			})
// 			.catch((error) => console.log(error));
// 	};
// 	return (
// 		<div>
// 			{favourite.map((cat) => {
// 				return (
// 					<ul>
// 						<li key={cat.id}>{cat.image.url}</li>
// 					</ul>
// 				);
// 			})}
// 		</div>
// 	);
// }

// export default Favourites;
