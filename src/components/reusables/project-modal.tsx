import React from "react";

import "./project-modal.scss";

interface IProjectModal {
	projectModalId: string;
	headlineModal: string;
	imgSrc: string;
	slideshowArray?: string[];
	projectDescription: any;
}

const ProjectModal = (props: IProjectModal) => (
	<div
		className="project-modal project-modal-wrapper uk-modal-full"
		id={props.projectModalId}
		key={"modal-" + props.projectModalId}
		uk-modal="true"
	>
		<div className="uk-modal-dialog uk-background-secondary uk-dark dialog-wrapper">
			<button
				className="uk-modal-close-full uk-close-large uk-background-secondary"
				type="button"
				uk-close="true"
			></button>
			<div
				className={
					"uk-grid-collapse modal-content-wrapper uk-child-width-1-2@s uk-flex-middle project-modal " +
					props.projectModalId
				}
				uk-grid="true"
			>
				<div uk-slideshow="true">
					<div className="uk-position-relative uk-visible-toggle">
						<ul className="project-slideshow uk-slideshow-items">
							{props.slideshowArray
								? props.slideshowArray.map((img, i) => (
										<li key={i + "-slideshow-image"}>
											<img
												src={img}
												key={i}
												alt=""
												uk-cover="true"
												className="slideshow-image"
											></img>
										</li>
								  ))
								: ""}
						</ul>
						<a
							className="uk-position-center-left uk-position-small uk-hidden-hover"
							href="#"
							uk-slidenav-previous="true"
							uk-slideshow-item="previous"
						></a>
						<a
							className="uk-position-center-right uk-position-small uk-hidden-hover"
							href="#"
							uk-slidenav-next="true"
							uk-slideshow-item="next"
						></a>
					</div>
					<ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
				</div>
				<div className="uk-padding-large uk-light uk-flex-top project-description-wrapper">
					<h1>{props.headlineModal}</h1>
					<div className="project-description-text">
						{props.projectDescription}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectModal;
