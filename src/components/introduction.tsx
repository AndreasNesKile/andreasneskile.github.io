import React from "react";

import "./introduction.scss";

const Introduction = () => (
	<div className="introduction-section">
		<div className="text">
			Hei, jeg heter
			<span className="highlight">Andreas Nes Kile</span>.
			<br />
			<div className="break"></div>
			<div className="i-am-container">
				Jeg er en
				<div className="fullstack-wrapper ">
					<div className="junior-text uk-badge">junior</div>
					<div className="full-p uk-animation-slide-top">full</div>
					<div className="stack-p uk-animation-slide-bottom">
						stack
					</div>
				</div>
				utvikler.
			</div>
		</div>
	</div>
);

export default Introduction;
