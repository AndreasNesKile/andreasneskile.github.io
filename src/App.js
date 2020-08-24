import React, { useState } from "react";
import "uikit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// import { f}"@fortawesome/free-solid-svg-icons";
import "./App.css";
import Introduction from "./components/introduction";
// import Navbar from "./components/navbar";

library.add(fab, fas, faGithub, faLinkedin, faChevronDown);

const sections = [
	{
		sectionName: "introduksjon",
	},
	{
		sectionName: "erfaring",
	},
	{
		sectionName: "prosjekter",
	},
	{
		sectionName: "sosiale-medier",
	},
];

function App() {
	const [activeSection, setActiveSection] = useState(sections[0]);

	return (
		<div className="App">
			{/* <Navbar /> */}
			<div className="uk-position-center-left uk-light dotnav">
				<ul className="uk-dotnav uk-dotnav-vertical" id="sections">
					{sections.map((section, i) => (
						<li
							className={
								activeSection.sectionName ===
								section.sectionName
									? "uk-active"
									: null
							}
							key={i}
						>
							<a
								href={"#" + section.sectionName}
								aria-label={section.sectionName}
								onClick={() => setActiveSection(section)}
							></a>
						</li>
					))}
				</ul>
			</div>
			<div className="uk-container uk-container-small page-content">
				<div
					className="uk-container uk-container-small introduction-container"
					id="introduksjon"
				>
					<Introduction />
				</div>
			</div>
			<div className="footer" id="sosiale-medier">
				<div className="socials-wrapper">
					<li className="socials-list">
						<a
							href="https://www.linkedin.com/in/andreasneskile"
							target="_"
						>
							<span
								className="uk-icon-link socials-linkedin"
								uk-icon="icon: linkedin; ratio: 1.5"
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
					Håndlaget av meg | {new Date().getFullYear()}
				</div>
			</div>
		</div>
	);
}

export default App;
