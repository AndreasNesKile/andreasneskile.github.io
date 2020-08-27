import React from "react";

import "./project-card.scss";
import ProjectModal from "../reusables/project-modal";

interface IProjectCard {
	title: string;
	description: string;
	customClassName: string;
	imgSrc: string;
	slideshowArray?: string[];
	imgPos: string;
}

const ProjectCard = (props: IProjectCard) => (
	<div
		className="uk-card uk-card-default uk-hover project-card"
		uk-hover="true"
	>
		<div
			className={"uk-card-media-" + props.imgPos + " uk-cover-container"}
		>
			<img
				src={props.imgSrc}
				className={props.customClassName + "-image"}
				alt=""
			/>
		</div>
		<div className="uk-card-body">
			<h3 className="uk-card-title">{props.title}</h3>
			<p>{props.description}</p>
		</div>
		<div className="uk-card-footer">
			<button
				className="uk-button uk-button-primary uk-margin-small-right"
				type="button"
				uk-toggle="target: #property-project-modal"
			>
				Les mer
			</button>
		</div>
		<ProjectModal
			projectModalId="property-project-modal"
			headlineModal="Property Project"
			imgSrc={props.imgSrc}
			slideshowArray={props.slideshowArray}
		/>
	</div>
);

export default ProjectCard;
