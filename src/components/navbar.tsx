import React from "react";
import "uikit";
import "./navbar.scss";

const Navbar = () => (
	<div className="uk-position-relative navbar" aria-label="navigation menu">
		<div className="uk-position-top">
			<nav
				className="uk-navbar-container uk-navbar-transparent"
				uk-navbar="true"
			>
				<div className="uk-navbar-left">
					<ul className="uk-navbar-nav">
						<li>
							<a href="#">Test</a>
						</li>
						<li>
							<a href="#">Item</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div className="container">
			<div className="navbar-brand"></div>
			<div className="navbar-item"></div>
		</div>
	</div>
);

export default Navbar;
