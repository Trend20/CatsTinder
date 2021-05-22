import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Vote, Breeds, Search, Favourites, Upload } from './index';

function Navbar() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Vote</Link>
						</li>
						<li>
							<Link to="/breeds">Breeds</Link>
						</li>
						<li>
							<Link to="/search">Search</Link>
						</li>
						<li>
							<Link to="/favourites">Favourites</Link>
						</li>
						<li>
							<Link to="/upload">Upload</Link>
						</li>
					</ul>
				</nav>

				{/* navigate to different routes */}
				<Switch>
					<Route exact path="/">
						<Vote />
					</Route>
					<Route path="/breeds">
						<Breeds />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
					<Route path="/favourites">
						<Favourites />
					</Route>
					<Route path="/upload">
						<Upload />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default Navbar;
