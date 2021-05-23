import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import { Vote, Breeds, Search, Favourites, Upload } from './index';
import './Main.css';

const linkStyles = {
	color: '#fff',
	textDecoration: 'none',
	textTransform: 'uppercase',
	fontSize: '.9rem',
};

function Navbar() {
	return (
		<Router>
			<div className="navigation">
				<nav>
					<ul>
						<li>
							<Link to="/" style={linkStyles}>
								Vote
							</Link>
						</li>
						<li>
							<Link to="/breeds" style={linkStyles}>
								Breeds
							</Link>
						</li>
						<li>
							<Link to="/search" style={linkStyles}>
								Images
							</Link>
						</li>
						<li>
							<Link to="/favourites" style={linkStyles}>
								Favourites
							</Link>
						</li>
						<li>
							<Link to="/upload" style={linkStyles}>
								Upload
							</Link>
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
