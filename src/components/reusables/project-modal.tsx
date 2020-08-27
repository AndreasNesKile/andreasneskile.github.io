import React from "react";

interface IProjectModal {
	projectModalId: string;
	headlineModal: string;
	imgSrc: string;
	slideshowArray?: string[];
}

const ProjectModal = (props: IProjectModal) => (
	<div
		className="project-modal uk-modal-full"
		id={props.projectModalId}
		uk-modal="true"
	>
		<div className="uk-modal-dialog">
			<button
				className="uk-modal-close-full uk-close-large"
				type="button"
				uk-close="true"
			></button>
			<div
				className="uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"
				uk-grid="true"
			>
				<div uk-slideshow="true">
					<ul>
						<li>
							{props.slideshowArray
								? props.slideshowArray.map((img, i) => (
										<img src={img} key={i} alt=""></img>
								  ))
								: ""}
						</li>
					</ul>
				</div>
				<div className="uk-padding-lage">
					<h1>{props.headlineModal}</h1>
					<p>Test set set set set </p>
				</div>
			</div>
		</div>
	</div>
);

export default ProjectModal;
