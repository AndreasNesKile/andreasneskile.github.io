import React from "react";

import "./project-card.scss";
import ProjectModal from "../reusables/project-modal";

interface IProjectCard {
	title: string;
	description: string;
	customClassName: string;
	imgSrc: string;
	slideshowArray?: string[];
	projectDescription: any;
}

const ProjectCard = (props: IProjectCard) => (
	<div
		className="uk-card uk-card-default uk-hover project-card"
		uk-hover="true"
	>
		<div
			className={
				"uk-card-media-" +
				props.title +
				" uk-cover-container project-card-image"
			}
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
				uk-toggle={"target: #" + props.customClassName + "-modal"}
			>
				Les mer
			</button>
		</div>
		<ProjectModal
			projectModalId={props.customClassName + "-modal"}
			headlineModal={props.title}
			imgSrc={props.imgSrc}
			slideshowArray={props.slideshowArray}
			projectDescription={props.projectDescription}
		/>
	</div>
);

export default ProjectCard;
