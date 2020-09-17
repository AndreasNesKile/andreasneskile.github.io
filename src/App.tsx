import React, { useState } from "react";
import "uikit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { fas, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./App.scss";
import Introduction from "./components/introduction";
import Projects from "./components/projects";
import Experience from "./components/experience";

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
			<div className="main-content">
				<div className="content-wrapper">
					{/* <div className="uk-position-center-left uk-light dotnav">
						<ul
							className="uk-dotnav uk-dotnav-vertical"
							id="sections"
						>
							{sections.map((section, i) => (
								<li
									className={
										activeSection.sectionName ===
										section.sectionName
											? "uk-active"
											: ""
									}
									key={i}
								>
									<a
										href={"#" + section.sectionName}
										aria-label={section.sectionName}
										onClick={() =>
											setActiveSection(section)
										}
										uk-tooltip={
											"title: " +
											section.sectionName.replace(
												"-",
												" "
											) +
											"; pos: right; cls: uk-active " +
											section.sectionName +
											" uk-dotnav-categories"
										}
									></a>
								</li>
							))}
						</ul>
					</div> */}
					<div className="introduction-section" id="introduksjon">
						<div className="introduction-container uk-animation-slide-top-medium">
							<Introduction />
						</div>
					</div>
					<div
						className="uk-section experience-section"
						id="section-2"
					>
						<div className="section-title experience" id="erfaring">
							<h1 className="projects-title">Erfaring</h1>
						</div>
						<div className="uk-container experience-container">
							<Experience />
						</div>
					</div>
					<div className="uk-section projects-section" id="section-3">
						<div className="section-title-projects" id="prosjekter">
							<h1 className="projects-title">Prosjekter</h1>
						</div>
						<div className="uk-container projects-container">
							<Projects />
						</div>
						<div className="top-button-container">
							<a
								href="/"
								uk-totop="true"
								uk-scroll="true"
								uk-tooltip={
									"title: Til toppen; pos: top; cls: uk-active tooltip-container"
								}
								className="to-top-button"
							></a>
						</div>
					</div>
				</div>

				<div className="footer-wrapper" id="section-4">
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
								<a
									href="https://github.com/AndreasNesKile"
									target="_"
								>
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
			</div>
		</div>
	);
}

export default App;
