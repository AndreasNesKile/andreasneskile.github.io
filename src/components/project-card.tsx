import React, { ImgHTMLAttributes, CSSProperties } from "react";

import "./project-card.scss";

type Props = {
	title: string;
	description: string;
	imageSrc: string;
	customClassName: string;
};

const ProjectCard = ({
	title,
	description,
	imageSrc,
	customClassName,
}: Props) => (
	<div
		className="uk-card uk-card-default uk-card-hover ukgrid-collapse uk-child-width-1-2@l uk-margin"
		uk-grid="true"
	>
		<div className="uk-card-media-left uk-cover-container">
			<img
				src={imageSrc}
				className={customClassName + "-image"}
				alt=""
				uk-cover="true"
			/>
			<canvas width="400" height="400"></canvas>
		</div>
		<div className="uk-card-body">
			<h3 className="uk-card-title">{title}</h3>
			<p>{description}</p>
		</div>
	</div>
);

export default ProjectCard;
