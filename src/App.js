import React from "react";
import "uikit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// import { f}"@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(fab, fas, faGithub, faLinkedin, faChevronDown);

function copyrightYear() {
	let today = new Date();
	let year = today.getFullYear();
	return year;
}

function App() {
	return (
		<div className="App">
			<div className="content-wrapper">
				<div className="uk-container page-content">
					<div className="uk-container uk-container-large main-content-container">
						<div className="uk-card uk-card-primary uk-card-body uk-card-hover maintenance-card">
							<h3 className="uk-card-title">
								Hei!
								<span role="img" aria-label="smiley face">
									😀
								</span>
							</h3>
							<p className="maintenance-descripiton">
								Min portfolio er for øyeblikket under
								oppbygging!
							</p>

							<p>
								Se under for sosiale medier og
								kontaktinformasjon.
							</p>
							<a uk-scroll="true" href="#socials">
								<span className="fa fa-chevron-down go-to-socials"></span>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer" id="socials">
				<div className="socials-wrapper">
					<li className="socials-list">
						<a
							href="https://www.linkedin.com/in/andreasneskile"
							target="_"
							alt="linkedin profile"
						>
							<span
								uk-icon="icon: linkedin; ratio: 1.5"
								className="uk-icon-link socials-linkedin"
							></span>
						</a>
					</li>
					<li>
						<a href="https://github.com/AndreasNesKile" target="_">
							<span
								className="uk-icon-link socials-github"
								uk-icon="icon: github; ratio: 1.5"
							></span>
						</a>
					</li>
				</div>
				<div className="copyright">
					Håndlaget av meg | {copyrightYear()}
				</div>
			</div>
		</div>
	);
}

export default App;
