import React from "react";

import "./introduction.scss";

const Introduction = () => (
	<div className="introduction-section">
		<div className="text-wrapper">
			Hei, eg heiter
			<span className="highlight">Andreas Nes Kile</span>
			.
			<br />
			<div className="break"></div>
			<div className="i-am-container">
				<span className="description-me"> Eg er ein</span>
				<div className="fullstack-wrapper ">
					<div className="junior-text uk-badge">junior</div>
					<div className="full-p uk-animation-slide-top">full</div>
					<div className="stack-p uk-animation-slide-bottom">
						stack
					</div>
				</div>
				<div className="utvikler-wrapper">utviklar.</div>
			</div>
		</div>
	</div>
);

export default Introduction;
