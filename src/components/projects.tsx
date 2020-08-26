import React from "react";

import ProjectCard from "./project-card";

const Projects = () => (
	<div className="uk-container projects-wrapper uk-muted">
		<div className="project-property-wrapper">
			<ProjectCard
				title="Property Project"
				description="This is an description"
				imageSrc={require("../assets/project-property/landingpage.png")}
				customClassName="property-project"
			/>
		</div>
	</div>
);

export default Projects;
