import React from "react";

import ProjectCard from "./reusables/project-card";

// Pictures for project preview
// Property Project
import propertyLandingPageImg from "../assets/project-property/landingpage.png";
import propertyCatalogueImg from "../assets/project-property/catalogue.png";
import propertyOverviewImg from "../assets/project-property/overview.png";

import PropertyProjectDescription from "./projectsPage/propertyproject";

// Trivia application
import triviaGameMenuImg from "../assets/trivia-application/triviaGameMenu.png";
import triviaLandingPageImg from "../assets/trivia-application/triviaLandingpage.png";
import triviaGameplayImg from "../assets/trivia-application/triviaGameplay.png";
import triviaResultpageImg from "../assets/trivia-application/triviaResultpage.png";
import triviaResultPageendImg from "../assets/trivia-application/triviaResultpageend.png";

import QuizApplicationDescription from "./projectsPage/quizApplication";

import "./projects.scss";

const Projects = () => (
	<div className="uk-container projects-container">
		<div className="projects-wrapper" uk-grid="true">
			<div className="property-project-wrapper">
				<ProjectCard
					title="Property Project"
					description="Applikasjonen lar deg se på ulike fiktive eiendommer, og basert på din autorisasjon (3 ulike nivåer) får du informasjon tilgjengelig for gjeldende autorisjonsnivå."
					imgSrc={propertyLandingPageImg}
					customClassName="property-project"
					slideshowArray={[
						propertyLandingPageImg,
						propertyCatalogueImg,
						propertyOverviewImg,
					]}
					projectDescription={PropertyProjectDescription()}
				/>
			</div>

			<div className="">
				<ProjectCard
					title="Quiz applikasjon"
					description="En simpel tidsbasert quiz hvor man kan velge hvor mange spørsmål man ønsker å svare på."
					imgSrc={triviaGameMenuImg}
					customClassName=" trivia-applikasjon"
					slideshowArray={[
						triviaLandingPageImg,
						triviaGameplayImg,
						triviaResultpageImg,
						triviaResultPageendImg,
					]}
					projectDescription={QuizApplicationDescription()}
				/>
			</div>
		</div>
	</div>
);

export default Projects;
