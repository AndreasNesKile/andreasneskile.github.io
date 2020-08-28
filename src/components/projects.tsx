import React from "react";

import ProjectCard from "./reusables/project-card";

// Pictures for project preview
// Property Project
import propertyLandingPageImg from "../assets/project-property/landingpage.png";
import propertyCatalogueImg from "../assets/project-property/catalogue.png";
import propertyOverviewImg from "../assets/project-property/overview.png";

// Trivia application
import triviaGameMenuImg from "../assets/trivia-application/triviaGameMenu.png";
import triviaLandingPageImg from "../assets/trivia-application/triviaLandingpage.png";
import triviaGameplayImg from "../assets/trivia-application/triviaGameplay.png";
import triviaResultpageImg from "../assets/trivia-application/triviaResultpage.png";
import triviaResultPageendImg from "../assets/trivia-application/triviaResultpageend.png";

import "./projects.scss";

const Projects = () => (
	<div className="uk-container projects-container">
		<div className="projects-wrapper" uk-grid="true">
			<div className="property-project-wrapper">
				<ProjectCard
					title="Property Project"
					description="Dette prosjektet lar deg se på ulike eiendommer (fiktive) rundt om, og basert på din autorisasjon, får du ulik informasjon tilgjengelig."
					imgSrc={propertyLandingPageImg}
					customClassName="property-project"
					imgPos="right"
					slideshowArray={[
						propertyLandingPageImg,
						propertyCatalogueImg,
						propertyOverviewImg,
					]}
				/>
			</div>

			<div className="">
				<ProjectCard
					title="Quiz applikasjon"
					description="En simpel tidsbasert quiz hvor man kan velge hvor mange spørsmål man ønsker å svare på."
					imgSrc={triviaGameMenuImg}
					customClassName="trivia-applikasjon"
					imgPos="right"
					slideshowArray={[
						triviaLandingPageImg,
						triviaGameplayImg,
						triviaResultpageImg,
						triviaResultPageendImg,
					]}
				/>
			</div>
		</div>
	</div>
);

export default Projects;
