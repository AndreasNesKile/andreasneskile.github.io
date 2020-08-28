import React from "react";

import "./project-modal.scss";

interface IProjectModal {
	projectModalId: string;
	headlineModal: string;
	imgSrc: string;
	slideshowArray?: string[];
}

const ProjectModal = (props: IProjectModal) => (
	<div
		className="project-modal uk-modal-full  "
		id={props.projectModalId}
		uk-modal="true"
	>
		<div className="uk-modal-dialog uk-background-secondary uk-dark">
			<button
				className="uk-modal-close-full uk-close-large uk-background-secondary"
				type="button"
				uk-close="true"
			></button>
			<div
				className={
					"uk-grid-collapse uk-child-width-1-2@s uk-flex-middle project-modal " +
					props.projectModalId
				}
				uk-grid="true"
			>
				<div uk-slideshow="true">
					<div className="uk-position-relative uk-visible-toggle">
						<ul className="project-slideshow uk-slideshow-items">
							{props.slideshowArray
								? props.slideshowArray.map((img, i) => (
										<li>
											<img
												src={img}
												key={i}
												alt=""
												uk-cover="true"
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
				<div className="uk-padding-large uk-light uk-flex-top">
					<h1>{props.headlineModal}</h1>
					<p>
						This is a test text in order to see what it looks like
						when a sentence is quite long and unique.
					</p>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectModal;
