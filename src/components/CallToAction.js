import React, { Component } from 'react';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

import './Main.css';

const reduceOne = (prevState, groupName, otherGroupName) => {
	prevState[groupName].wasClicked
		? (prevState[groupName].count = prevState[groupName].count - 1)
		: (prevState[groupName].count = prevState[groupName].count + 1);
	prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
	if (prevState[otherGroupName].wasClicked) {
		prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
		prevState[otherGroupName].wasClicked = false;
	}
	return prevState;
};

const reducer = (action) => (prevState, props) =>
	action.type === 'TOGGLE_LIKE' ? reduceOne(prevState, 'like', 'dislike') : reduceOne(prevState, 'dislike', 'like');

class App extends Component {
	state = {
		like: {
			count: 0,
			wasClicked: false,
		},
		dislike: {
			count: 0,
			wasClicked: false,
		},
	};

	toggleLike = () => {
		this.setState(reducer({ type: 'TOGGLE_LIKE' }));
		localStorage.setItem(this.state.like, JSON.stringify(this.state.like));
	};
	toggleDislike = () => {
		this.setState(reducer({ type: 'TOGGLE_DISLIKE' }));
		localStorage.setItem(this.state.dislike, JSON.stringify(this.state.dislike));
	};

	render() {
		return (
			<div className="btn-container">
				<button id="like-button" onClick={this.toggleLike}>
					<AiFillLike />
					{this.state.like.count}
				</button>
				<button id="dislike-button" onClick={this.toggleDislike}>
					<AiFillDislike />
					{this.state.dislike.count}
				</button>
			</div>
		);
	}
}

export default App;
