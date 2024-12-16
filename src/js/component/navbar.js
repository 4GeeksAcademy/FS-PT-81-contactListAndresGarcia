import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="ml-auto">
				<button className="btn btn-primary">React Boilerplate</button>
			</div>
			<div>
				<Link to="/AddContact">
					<button className="btn btn-primary">Add contact</button>
				</Link>
			</div>
		</nav>
	);
};
