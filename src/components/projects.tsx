import React from "react";

import ProjectCard from "./reusables/project-card";

import landingPageImg from "../assets/project-property/landingpage.png";

import "./projects.scss";

const Projects = () => (
	<div className="uk-container projects-container">
		<div className="projects-wrapper" uk-grid="true">
			<div className="property-project-wrapper">
				<ProjectCard
					title="Property Project"
					description="Dette prosjektet lar deg se på ulike eiendommer (fiktive) rundt om, og basert på din autorisasjon, får du ulik informasjon tilgjengelig."
					imgSrc={landingPageImg}
					customClassName="property-project"
					imgPos="right"
					slideshowArray={[
						landingPageImg,
						// require("~/src/assets/project-property/catalogue.png"),
						// require("~/src/assets/project-property/overview.png"),
					]}
				/>
			</div>

			<div className="">
				<ProjectCard
					title="Rock & Morty search index"
					description="This is an description"
					imgSrc={landingPageImg}
					customClassName="property-project"
					imgPos="right"
				/>
			</div>
		</div>
	</div>
);

export default Projects;
